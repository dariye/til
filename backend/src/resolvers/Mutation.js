const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { getUserId } = require('../utils');
const { secret } = require('../config').common;

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword
    });

    return {
      token: sign({ userId: user.id }, secret),
      user
    };
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email });

    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }

    const validPassword = await compare(password, user.password);

    if (!validPassword) {
      throw new Error(`Invalid password`);
    }

    return {
      token: sign({ userId: user.id }, secret),
      user
    };
  },
  createDraft: async (parent, { title, content }, context) => {
    const userId = getUserId(context);
    return context.prisma.createPost({
      title,
      content,
      author: {
        connect: {
          id: userId
        }
      }
    });
  },
  deletePost: async (parent, { id }, context) => {
    return context.prisma.deletePost({ id });
  },
  publish: async (parent, { id }, context) => {
    return context.prisma.updatePost({
      where: {
        id
      },
      data: {
        published: true
      }
    });
  }
};

module.exports = {
  Mutation
};
