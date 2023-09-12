import React, {useEffect, useState} from "react";
import {Box, Button, Paper, styled} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';
import EnunciadoComponent from "./EnunciadoComponent/EnunciadoComponent";
import './TareaComponent.css';
import RespuestaComponent from "./RespuestaComponent/RespuestaComponent";
import axios from "axios";




const Item2 = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: theme.palette.secondary.main,
    width: '80%',
    height: '80%',
    borderRadius: '0',
    elevation: 20,
    top: '100px',
    boxShadow:  '10px 10px 15px 0px rgba(33,33,33,.7)',
    // transform: 'rotate(-1.5deg)',

}));
function TareaComponent({token}) {
    // eslint-disable no-unused-vars
    const [preguntaActiva, setPreguntaActiva] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nivelUsuario, setNivelUsuario] = useState('1');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [enunciado, setEnunciado] = useState({dibujo: false});
    const [alternativas, setAlternativas] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [endOfQuiz, setEndOfQuiz] = useState(false);
    const [numPreguntas, setNumPreguntas] = useState(0);


    let categorias = {};

    const handleNext = (answer) => {
        // Save the user's answer


        if (preguntaActiva < numPreguntas-1) {
            setPreguntaActiva(preguntaActiva + 1);
            let q = {
                question: questions[preguntaActiva + 1].question ,
                difficulty: questions[preguntaActiva + 1].difficulty  ,
                category: questions[preguntaActiva + 1].category  ,
                tipo: "Alternativas",
                dibujo: false
            };
            setEnunciado(q);
            setAlternativas(questions[preguntaActiva + 1].answers);
        }
        else {
            setEndOfQuiz(true);
        }
    }

    const handleClick = async () => {
        setIsButtonVisible(false);
        try {
            const response = await fetch('http://localhost:9000/api/get-quiz/' + nivelUsuario + '/');
            const json = await response.json();

            console.log(json.data);
            let np = 0;
            let qs = [];
            json.data.forEach(question => {
                np += 1;
                qs.push(question);
            });
            setQuestions(qs);
            setNumPreguntas(np);
            setPreguntaActiva(0);
            let q = {
                question: qs[preguntaActiva].question ,
                difficulty: qs[preguntaActiva].difficulty  ,
                category: qs[preguntaActiva].category  ,
                tipo: "Alternativas",
                dibujo: false
            };
            setEnunciado(q);
            setAlternativas(qs[preguntaActiva].answers);

        } catch (error) {
            console.log(error);
        }
    };


    function handleAnswerSubmission(answer){

        for (let i = 0; i < alternativas.length; i++) {
            if (alternativas[i].answer === answer) {
                if (alternativas[i].is_correct) {
                    setUserAnswers([...userAnswers, true])
                }
                else {
                    setUserAnswers([...userAnswers, false])
                }
            }
        }

        handleNext();

    }





    return (
        <div className="Tarea">




                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    overflow={"scroll"}
                    sx={{  mt: '100px', height: "100%", mb: '50px', zIndex: '1'}}>

                    <Item2 sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '80%',
                        borderRadius: '0',
                        elevation: 20,
                        boxShadow:  '10px 10px 15px 0px rgba(33,33,33,.7)',

                    }}>
                        {!endOfQuiz && !isButtonVisible && <div>Pregunta {preguntaActiva + 1} de {numPreguntas}</div>}
                        {!endOfQuiz &&


                            <EnunciadoComponent enunciado={enunciado}/>}
                        {endOfQuiz && (
                            <div>
                                <h1>End of quiz!</h1>
                                <h2>Score: {userAnswers.filter(answer => answer).length}/{userAnswers.length}</h2>
                            </div>
                        )}

                        {isButtonVisible && (
                            <Button variant="contained" onClick={handleClick}>
                                Start
                            </Button>
                        )}

                    </Item2>
                    {!endOfQuiz &&
                    <RespuestaComponent respuestas={alternativas} onAnwerSelected={handleAnswerSubmission}/>}

                </Stack>

        </div>
    );
}

export default TareaComponent;
