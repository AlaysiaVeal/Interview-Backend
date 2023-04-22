require('dotenv').config()

module.exports = {
  development: {
    database: 'interview_development',
    dialect: 'postgres'
  },
  test: {
    database: 'interview_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    database: 'interview_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
