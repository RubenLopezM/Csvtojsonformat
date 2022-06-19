import express from 'express';
const app = express()
const port = 3000


import routes from './routes/routes.js'

app.use('/',routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})