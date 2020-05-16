module.exports = {
  database: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DATABASE_URL,
    },
    useNullAsDefault: true,
  },
};
