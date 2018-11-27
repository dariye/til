import { verify } from 'jsonwebtoken';

const { secret } = require('../config').common;

function getUserId(context) {
  const Authorization = context.request.get('Authorization');
  if (!Authorization) return null;
  const token = Authorization.replace('Bearer', '');
  const verifiedToken = verify(token, secret);
  return verifiedToken && verifiedToken.userId;
}

export default { getUserId };
