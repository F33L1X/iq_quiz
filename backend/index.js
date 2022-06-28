const express = require('express')  //middleware
const app = express()
const port = 8000   //react nutzt 3000

var questions = [
    {
        id: "ID",
        question: "Frage",
        answer: "Antwort"
    },
    {
        title: "Frage"
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/questions', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})