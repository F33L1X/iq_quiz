const express = require('express')  //middleware //node index.js
const { v4: uuidv4 } = require('uuid');    //backendspezifisch  ... or using CommonJS syntax:

const app = express()
const port = 8000   //react nutzt 3000

var categories = [
  "Weltraum",
  "Natur",
  "Geschichte",
  "Physik",
  "Geografie",
  "Menschen"
]


var questions = [
  //Weltall
  {
    id: "1",
    Kategorie: "Weltraum",
    question: "Welcher Planet unseres Sonnensystems ist am dichtesten zur Sonne",
    answerA: {
     answer: "Venus",
     rightAnswer: false
    },
    answerB: {
      answer: "Merkur",
      rightAnswer: true
     },
    answerC: {
      answer: "Jupyter",
      rightAnswer: false
     },
    answerD: {
      answer: "Uranus",
      rightAnswer: false
     }
  },
  {
    id: "2",
    Kategorie: "Weltraum",
    question: "Wie heißt der größte Planet in unserem Sonnensystem",
    answerA: {
      answer: "Mars",
      rightAnswer: false
     },
    answerB: {
      answer: "Jupiter",
      rightAnswer: true
     },  
    answerC: {
      answer: "Pluto",
      rightAnswer: false
     },
    answerD: {
      answer: "Merkur",
      rightAnswer: false
     }
  }, 
  {
    id: "3",
    Kategorie: "Weltraum",
    question: "Wie viele Planeten gibt es in unserem Sonnensystem",
    answerA: {
      answer: "6",
      rightAnswer: false
     },
    answerB: {
      answer: "7",
      rightAnswer: false
     },  
    answerC: {
      answer: "8",
      rightAnswer: true
     },
    answerD: {
      answer: "9",
      rightAnswer: false
     }
  },
  {
    id: "4",
    Kategorie: "Weltraum",
    question: "Heute wissen wir, dass die Erde um die Sonne kreist. Doch jahrtausendelang dachten die Menschen, es sei genau umgekehrt und die Sonne und alle anderen Gestirne würden sich um die Erde drehen. Wie heißt der berühmte Wissenschaftler, der diesem Irrtum ein Ende setzte?",
    answerA: {
      answer: "Albert Einstein",
      rightAnswer: false
     },
    answerB: {
      answer: "Isaac Newton",
      rightAnswer: false
     },  
    answerC: {
      answer: "Nicolaus Kopernikus",
      rightAnswer: true
     },
    answerD: {
      answer: "Johannes Kepler",
      rightAnswer: false
     }
  },
  {
    id: "5",
    Kategorie: "Weltraum",
    question: "Gibt es außer uns andere Intilligenten Wesen? Wie heissen die Wissenschaftler, die sich dieser Frage widmen?",
    answerA: {
      answer: "Astrologen",
      rightAnswer: false
     },
    answerB: {
      answer: "Astrobiologen",
      rightAnswer: true
     },  
    answerC: {
      answer: "Astronauten",
      rightAnswer: false
     },
    answerD: {
      answer: "Astronbionisten",
      rightAnswer: false
     }
    
  },
  {
    id: "6",
    Kategorie: "Weltraum",
    question: "Der Mond ist der einzige natürlich Himmelskörper, der die Erde umkreist. Wie weit ist er von der Erde entfernt?",
    answerA: {
      answer: "384.400",
      rightAnswer: true
     },
    answerB: {
      answer: "276.300",
      rightAnswer: false
     },  
    answerC: {
      answer: "432.500",
      rightAnswer: false
     },
    answerD: {
      answer: "166.900",
      rightAnswer: false
     }
  },
  {
    id: "7",
    Kategorie: "Weltraum",
    question: "Wie viel Masse weist der Mars auf?",
    answerA: {
      answer: "1,9 Erdmassen",
      rightAnswer: false
     },
    answerB: {
      answer: "1,2 Erdmassen",
      rightAnswer: false
     },  
    answerC: {
      answer: "0,7 Erdmassen",
      rightAnswer: false
     },
    answerD: {
      answer: "0,1 Erdmassen",
      rightAnswer: true
     }
  },
  {
    id: "8",
    Kategorie: "Weltraum",
    question: "Ein Planet ist von der Erde besonders gut zu sehen. Nach Sonne und Mond ist er das hellste Gestirn am Himmel. Wie heißt er?",
    answerA: {
      answer: "Venus",
      rightAnswer: true
     },
    answerB: {
      answer: "Mars",
      rightAnswer: false
     },  
    answerC: {
      answer: "Jupieter",
      rightAnswer: false
     },
    answerD: {
      answer: "Uranus",
      rightAnswer: false
     }
  },
  {
    id: "9",
    Kategorie: "Weltraum",
    question: "Wie groß ist der Durchmesser des Kosmos?",
    answerA: {
      answer: "18 Lichtjahre",
      rightAnswer: false
     },
    answerB: {
      answer: "38 Lichtjahre",
      rightAnswer: false
     },  
    answerC: {
      answer: "78 Lichtjahre",
      rightAnswer: true
     },
    answerD: {
      answer: "108 Lichtjahre",
      rightAnswer: false
     }
  },
  {
    id: "10",
    Kategorie: "Weltraum",
    question: "Welche Galaxie ist unserer am nächsten?",
    answerA: {
      answer: "Beta Centaurus",
      rightAnswer: false
     },
    answerB: {
      answer: "Alpha Centaurus",
      rightAnswer: false
     },  
    answerC: {
      answer: "Beta Zentauri",
      rightAnswer: true
     },
    answerD: {
      answer: "Alpha Centauri",
      rightAnswer: false
     }
  },
//NATUR
   {
    id: "11",
    Kategorie: "Natur",
    question: "Wie schwer kann ein Blauwal werden?",
    answerA: {
      answer: "Bis zu 1.000 Kilogramm",
      rightAnswer: false
     },
    answerB: {
      answer: "Bis zu 20.000 Kilogramm",
      rightAnswer: false
     },  
    answerC: {
      answer: "Bis zu 95 Tonnen",
      rightAnswer: false
     },
    answerD: {
      answer: "Bis zu 200.000.000 Gramm",
      rightAnswer: true
     }
  },
  {
    id: "12",
    Kategorie: "Natur",
    question: "Zu welcher Familie gehört der Fuchs?",
    answerA: {
      answer: "Zur Familie der Bären",
      rightAnswer: false
     },
    answerB: {
      answer: "Zur Familie der Katzen",
      rightAnswer: false
     },  
    answerC: {
      answer: "Zur Familie der Mäuse",
      rightAnswer: false
     },
    answerD: {
      answer: "Zur Familie der Hunde",
      rightAnswer: true
     }
  },
  {
    id: "13",
    Kategorie: "Natur",
    question: "Welche Delfinart ist die bekannteste?",
    answerA: {
      answer: "Große Meister",
      rightAnswer: false
     },
    answerB: {
      answer: "Kleine Schwimmer",
      rightAnswer: false
     },  
    answerC: {
      answer: "Große Tümmler",
      rightAnswer: true
     },
    answerD: {
      answer: "Kleine Säuger",
      rightAnswer: false
     }
  },
  {
    id: "14",
    Kategorie: "Natur",
    question: "Wie viele Halswirbel hat eine Giraffe?",
    answerA: {
      answer: "7",
      rightAnswer: true
     },
    answerB: {
      answer: "12",
      rightAnswer: false
     },  
    answerC: {
      answer: "19",
      rightAnswer: false
     },
    answerD: {
      answer: "15",
      rightAnswer: false
     }
  },
  {
    id: "15",
    Kategorie: "Natur",
    question: "Wieso spucken Lamas?",
    answerA: {
      answer: "Um ihre Zuneigung auszudrücken.",
      rightAnswer: false
     },
    answerB: {
      answer: "Um zu signalisieren, dass sie Hunger haben.",
      rightAnswer: false
     },  
    answerC: {
      answer: "Um ihre Dominanz zu zeigen.",
      rightAnswer: true
     },
    answerD: {
      answer: "Sie spucken ohne Grund.",
      rightAnswer: false
     }
  },
  {
    id: "16",
    Kategorie: "Natur",
    question: "Zum Gedeihen benötigen die meisten Pflanzen...",
    answerA: {
      answer: "Natrium",
      rightAnswer: false
     },
    answerB: {
      answer: "Iod",
      rightAnswer: false
     },  
    answerC: {
      answer: "Stickstoff",
      rightAnswer: true
     },
    answerD: {
      answer: "Radium",
      rightAnswer: false
     }
  },
  {
    id: "17",
    Kategorie: "Natur",
    question: "Welche dieser Früchte ist für den Botaniker keine Beere?",
    answerA: {
      answer: "Stachelbeere",
      rightAnswer: false
     },
    answerB: {
      answer: "Erdbeere",
      rightAnswer: true
     },  
    answerC: {
      answer: "Johannisbeere",
      rightAnswer: false
     },
    answerD: {
      answer: "Heidelbeere",
      rightAnswer: false
     }
  },
  {
    id: "18",
    Kategorie: "Natur",
    question: "Wie viele Pflanzen in der gemäßigten Klimazone sind auf Bienen als Bestäuber angewiesen?",
    answerA: {
      answer: "64%",
      rightAnswer: true
     },
    answerB: {
      answer: "54%",
      rightAnswer: false
     },  
    answerC: {
      answer: "44%",
      rightAnswer: false
     },
    answerD: {
      answer: "34%",
      rightAnswer: false
     }
  },
  {
    id: "19",
    Kategorie: "Natur",
    question: "Bei was handelt es sich um eine Pflanze??",
    answerA: {
      answer: "Koralle",
      rightAnswer: false
     },
    answerB: {
      answer: "Seetang",
      rightAnswer: true
     },  
    answerC: {
      answer: "Seeigel",
      rightAnswer: true
     },
    answerD: {
      answer: "Seeanemone",
      rightAnswer: false
     }
  },
  {
    id: "20",
    Kategorie: "Natur",
    question: "Wie heißen Pflanzen, die Wasser speichern??",
    answerA: {
      answer: "Helophyten",
      rightAnswer: false
     },
    answerB: {
      answer: "Sukkulenten",
      rightAnswer: true
     },  
    answerC: {
      answer: "Hydrophyten",
      rightAnswer: false
     },
    answerD: {
      answer: "Pleustophyten",
      rightAnswer: false
     }
  },
  /* //Geschichte
  {
    id: "21",
    Kategorie: "Geschichte",
    question: "Im Zuge welcher Revolution wurde Ludwig XVI. zum Tode verurteilt und hingerichtet?",
    answerA: "Amerikanische Revolution",
    answerB: "Japanische Revolution",  
    answerC: "Deutsche Revolution",
    answerD: "Französische Revolution" //+
  },
  {
    id: "22",
    Kategorie: "Geschichte",
    question: "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
    answerA: "Ludwig Erhard",
    answerB: "Konrad Adenauer",  //+ 
    answerC: "Helmut Schmidt",
    answerD: " Willy Brandt" 
  },
  {
    id: "23",
    Kategorie: "Geschichte",
    question: "In welchem Jahr wurde die NATO gegründet??",
    answerA: "1950",
    answerB: "1924",  
    answerC: "1949", //+
    answerD: "1974"
  },
  {
    id: "24",
    Kategorie: "Geschichte",
    question: "Wer gilt als Erfinder des modernen Buchdrucks mit beweglichen Metalllettern und der Druckerpresse??",
    answerA: "Johannes Gutenberg", //+
    answerB: "Ludwig Erhard",  
    answerC: "Gregor Mendel", 
    answerD: "Papst Franziskus"
  },
  {
    id: "25",
    Kategorie: "Geschichte",
    question: "Wer führte 1914 ein Attentat auf Erzherzog Franz Ferdinand durch??",
    answerA: "Kaiser Wilhelm II", 
    answerB: "Gavrilo Princip.",   //+
    answerC: "Alfred Graf von Schlieffen",  
    answerD: "Theobald von Bethmann Hollweg"
  },
  {
    id: "26",
    Kategorie: "Geschichte",
    question: "Wo wurde zum ersten mal Gebrauch von Schießpulver gemacht?",
    answerA: "", 
    answerB: "Iod.",  
    answerC: "Stickstoff.", //+
    answerD: "Radium."
  },
  {
    id: "27",
    Kategorie: "Geschichte",
    question: "Womit versuchte Marokko 1975, Spanien zur Übergabe der Kolonie Spanisch-Sahara zu bewegen?",
    answerA: "Roter Weg",
    answerB: "Blaue Bewegung",  
    answerC: "Gelbe Runde", 
    answerD: "Grüner Marsch" //+
  },
  {
    id: "28",
    Kategorie: "Geschichte",
    question: "In welchem Jahr wurde der zuvor gegoltene Goldstandard für Fiat Currencys aufgehoben",
    answerA: "1967", 
    answerB: "1971", //+ 
    answerC: "1973", 
    answerD: "1978"
  },
  {
    id: "29",
    Kategorie: "Geschichte",
    question: "Wann wurde Rom nach altrömischer Überlieferung gegründet?",
    answerA: "553 v Ch.",
    answerB: "653 v Ch.",  
    answerC: "753 v Ch.", //+
    answerD: "853 v Ch." 
  },
  {
    id: "30",
    Kategorie: "Geschichte",
    question: "Man unterteilt die Steinzeit in...",
    answerA: "Altsteinzeit und Neusteinzeit",
    answerB: "Frühsteinzeit und Spätsteinzeit",  
    answerC: "Altsteinzeit und Jungsteinzeit", //+
    answerD: "Anfangssteinzeit und fortgeschrittene Steinzeit"
  } */ 
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

app.get('/api/questions', (req, res) => {    
      res.status(200).send(questions)
 })

app.get('/api/categories', (req, res) => {    
  res.status(200).send(categories)
})


//Game Categories   <-----
app.get('/api/quizgame', (req, res) => {   
  res.status(200).send(questions)
})

//Game Categories End   <-----


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

