import { Db } from 'mongodb';

module.exports = {
  async up(db: Db) {
    console.log('Adding index on users.email');
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
  },
};
