import React from 'react'
//import {useNavigate} from 'react-router-dom';
import image1 from "../imgs/Weltall.jpg";
import image2 from "../imgs/Nature.jpg";
import image3 from "../imgs/History.jpg";
import image4 from "../imgs/Physik.jpg";
import image5 from "../imgs/Geografie.jpg";
import image6 from "../imgs/Menschen.jpg";


//const weltallPic = new URL ("../imgs/Weltall.jpg",import.meta.url)

function CategorieChoose({categories}) {

  //const navigate = useNavigate();

  function QuizGameWeltall () {
    console.log("TestWeltall")
    //navigate ('/api/quizgame');
    console.log({categories})

  }

  function QuizGameNature () {
    console.log("TestNature")
    //navigate ('/api/quizgame');

  }

  function QuizGameGeschichte () {
    console.log("TestGe")
    //navigate ('/api/quizgame');

  }

  function QuizGamePhysik () {
    console.log("TestPhy")
    //navigate ('/api/quizgame');

  }

  function QuizGameGeografie () {
    console.log("TestNGeo")
    //navigate ('/api/quizgame');

  }

  function QuizGameMenschen () {
    console.log("TestMensch")
    //navigate ('/api/quizgame');

  }

  return (

    <div className="Categories">
      <div className="box" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  onClick={QuizGameWeltall}><p className="InnerText">Weltall</p></div>
      <div className="box" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameNature}><p className="InnerText">Natur</p></div>
      <div className="box"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameGeschichte}><p className="InnerText">Geschichte</p></div>
      <div className="box"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGamePhysik}><p className="InnerText">Physik</p></div>
      <div className="box"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameGeografie}><p className="InnerText">Geografie</p></div>
      <div className="box"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameMenschen}><p className="InnerText">Menschen</p></div>
    </div>
    //<div className="Categories"><div className="Weltall"></div></div>
  )
}

export default CategorieChoose

//<img className='WeltallPic' src={weltallPic}/>