const express = require('express')  //middleware //node index.js
const { v4: uuidv4 } = require('uuid');    //backendspezifisch  ... or using CommonJS syntax:

const app = express()
const port = 8000   //react nutzt 3000

var categories = [
  "Weltraum",
  "B",
  "C"
]


var questions = [
  {
    id: "1",
    Kategorie: "Weltraum",
    question: "Welcher Planet unseres Sonnensystems ist am dichtesten zur Sonne",
    answerA: "Venus",
    answerB: "Merkur",  //+
    answerC: "Jupyter",
    answerD: "Uranus"
  },
  {
    id: "2",
    Kategorie: "Weltraum",
    question: "",
    answerA: "Antwort",
    answerB: "Antwort",
    answerC: "Antwort",
    answerD: "Antwort"
  }
]

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/question', (req, res) => {    //http://localhost:8000/api/questions?id=1
    console.log(req.query.id)
    questions.map(e => {
      if (e.id === req.query.id) {
        res.status(200).send(e)
      }
    }) 
  })

app.get('/api/questions', (req, res) => {    //http://localhost:8000/api/questions?id=1
      res.status(200).send(questions)
 })

 app.get('/api/categories', (req, res) => {    //http://localhost:8000/api/questions?id=1
  res.status(200).send(categories)
})


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

