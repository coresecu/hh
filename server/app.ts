import express from 'express'
const app = express()

app.use(express.static(__dirname + '/build'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(3000, () => {
    console.log('Server is running')
})