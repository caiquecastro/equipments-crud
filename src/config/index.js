module.exports = {
  database: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
  },
};
