const { getUserId } = require('../utils');

const Query = {
  me: (parent, args, context) => {
    const userId = getUserId(context);
    return context.prisma.user({ id: userId });
  },
  user: (parent, { email }, context) => {
    return context.prisma.user({
      where: { email }
    });
  },
  feed: (parent, args, context) => {
    return context.prisma.posts({
      where: { published: true }
    });
  },
  filteredPosts: (parent, { query }, context) => {
    return context.prisma.posts({
      where: {
        OR: [
          {
            title_contains: query
          },
          {
            content_contains: query
          }
        ]
      }
    });
  },
  post: (parent, { id }, context) => {
    return context.prisma.post({ id });
  }
};

module.exports = {
  Query
};
