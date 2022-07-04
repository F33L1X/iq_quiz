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
    answerA: "Venus",
    answerB: "Merkur",  //+
    answerC: "Jupyter",
    answerD: "Uranus"
  },
  {
    id: "2",
    Kategorie: "Weltraum",
    question: "Wie heißt der größte Planet in unserem Sonnensystem",
    answerA: "Mars",
    answerB: "Jupiter",  //+
    answerC: "Pluto",
    answerD: "Merkur"
  },
  {
    id: "3",
    Kategorie: "Weltraum",
    question: "Wie viele Planeten gibt es in unserem Sonnensystem",
    answerA: "Sechs",
    answerB: "Sieben",  
    answerC: "Acht", //+
    answerD: "Neun"
  },
  {
    id: "4",
    Kategorie: "Weltraum",
    question: "Heute wissen wir, dass die Erde um die Sonne kreist. Doch jahrtausendelang dachten die Menschen, es sei genau umgekehrt und die Sonne und alle anderen Gestirne würden sich um die Erde drehen. Wie heißt der berühmte Wissenschaftler, der diesem Irrtum ein Ende setzte?",
    answerA: "Albert Einstein",
    answerB: "Isaac Newton",  
    answerC: "Nicolaus Kopernikus", //+
    answerD: "Johannes Kepler"
  },
  {
    id: "5",
    Kategorie: "Weltraum",
    question: "Gibt es außer uns andere Intilligenten Wesen? Wie heissen die Wissenschaftler, die sich dieser Frage widmen?",
    answerA: "Astrologen", 
    answerB: "Astrobiologen",   //+
    answerC: "Astronauten", 
    answerD: "Astronbionisten"
  },
  {
    id: "6",
    Kategorie: "Weltraum",
    question: "Der Mond ist der einzige natürlich Himmelskörper, der die Erde umkreist. Wie weit ist er von der Erde entfernt?",
    answerA: "384.400", //+
    answerB: "276.300",  
    answerC: "432.500", 
    answerD: "166.900"
  },
  {
    id: "7",
    Kategorie: "Weltraum",
    question: "Wie viele Planeten gibt es in unserem Sonnensystem",
    answerA: "Sechs",
    answerB: "Sieben",  
    answerC: "Acht", //+
    answerD: "Neun"
  },
  {
    id: "8",
    Kategorie: "Weltraum",
    question: "Ein Planet ist von der Erde besonders gut zu sehen. Nach Sonne und Mond ist er das hellste Gestirn am Himmel. Wie heißt er?",
    answerA: "Venus", //+
    answerB: "Mars",  
    answerC: "Jupieter", 
    answerD: "Uranus"
  },
  {
    id: "9",
    Kategorie: "Weltraum",
    question: "Wie groß ist der Kosmos?",
    answerA: "10^22km",
    answerB: "10^23km",  
    answerC: "10^19km", 
    answerD: "10^24km" //+
  },
  {
    id: "10",
    Kategorie: "Weltraum",
    question: "Welche Galaxie ist unserer am nächsten?",
    answerA: "Beta Centaurus",
    answerB: "Alpha Centaurus ",  
    answerC: "Beta Zentauri", //+
    answerD: "Alpha Centauri"
  },
//NATUR
  {
    id: "11",
    Kategorie: "Natur",
    question: "Wie schwer kann ein Blauwal werden?",
    answerA: "Bis zu 1.000 Kilogramm",
    answerB: "Bis zu 20.000 Kilogramm",  
    answerC: "Bis zu 95 Tonnen",
    answerD: "Bis zu 200.000.000 Gramm" //+
  },
  {
    id: "12",
    Kategorie: "Natur",
    question: "Zu welcher Familie gehört der Fuchs?",
    answerA: "Zur Familie der Bären",
    answerB: "Zur Familie der Katzen", 
    answerC: "Zur Familie der Mäuse",
    answerD: "Zur Familie der Hunde" //+ 
  },
  {
    id: "13",
    Kategorie: "Natur",
    question: "Welche Delfinart ist die bekannteste?",
    answerA: "Große Meister",
    answerB: "Kleine Schwimmer",  
    answerC: "Große Tümmler", //+
    answerD: "Kleine Säuger"
  },
  {
    id: "14",
    Kategorie: "Natur",
    question: "Wie viele Halswirbel hat eine Giraffe?",
    answerA: "7", //+
    answerB: "12",  
    answerC: "19", 
    answerD: "15"
  },
  {
    id: "15",
    Kategorie: "Natur",
    question: "Wieso spucken Lamas?",
    answerA: "Um ihre Zuneigung auszudrücken.", 
    answerB: "Um zu signalisieren, dass sie Hunger haben.",   
    answerC: "Um ihre Dominanz zu zeigen.",  //+
    answerD: "Sie spucken ohne Grund."
  },
  {
    id: "16",
    Kategorie: "Natur",
    question: "Zum Gedeihen benötigen die meisten Pflanzen...",
    answerA: "Natrium.", 
    answerB: "Iod.",  
    answerC: "Stickstoff.", //+
    answerD: "Radium."
  },
  {
    id: "17",
    Kategorie: "Natur",
    question: "Welche dieser Früchte ist für den Botaniker keine Beere?",
    answerA: "Stachelbeere",
    answerB: "Erdbeere",  //+
    answerC: "Johannisbeere", 
    answerD: "Heidelbeere"
  },
  {
    id: "18",
    Kategorie: "Natur",
    question: "Wie viele Pflanzen in der gemäßigten Klimazone sind auf Bienen als Bestäuber angewiesen?",
    answerA: "64%", //+
    answerB: "54%",  
    answerC: "44%", 
    answerD: "34%"
  },
  {
    id: "19",
    Kategorie: "Natur",
    question: "Bei was handelt es sich um eine Pflanze??",
    answerA: "Koralle",
    answerB: "Seetang",  //+
    answerC: "Seeigel", 
    answerD: "Seeanemone" 
  },
  {
    id: "20",
    Kategorie: "Natur",
    question: "Wie heißen Pflanzen, die Wasser speichern??",
    answerA: "Helophyten",
    answerB: "Sukkulenten ",  //+
    answerC: "Hydrophyten", 
    answerD: "Pleustophyten"
  },
  //Geschichte
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

app.get('/api/questions', (req, res) => {    
      res.status(200).send(questions)
 })

app.get('/api/categories', (req, res) => {    
  res.status(200).send(categories)
})


//Game Categories   <-----
app.get('/api/quizgameWeltall', (req, res) => {   
  res.status(200).send(categories)
})
app.get('/api/quizgameNature', (req, res) => {   
  res.status(200).send(categories)
})
app.get('/api/quizgameGeschichte', (req, res) => {   
  res.status(200).send(categories)
})
app.get('/api/quizgamePhysik', (req, res) => {   
  res.status(200).send(categories)
})
app.get('/api/quizgameGeografie', (req, res) => {   
  res.status(200).send(categories)
})
app.get('/api/quizgameMenschen', (req, res) => {   
  res.status(200).send(categories)
})
//Game Categories End   <-----


  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

