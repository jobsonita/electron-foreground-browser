require('dotenv').config()

module.exports = {
  url: process.env.URL || 'www.google.com.br',
  width: Number(process.env.WIDTH),
  height: Number(process.env.HEIGHT),
}
