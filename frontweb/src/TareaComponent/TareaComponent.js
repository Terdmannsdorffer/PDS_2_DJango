import React from "react";
import {Box, Paper, styled} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';
import EnunciadoComponent from "./EnunciadoComponent/EnunciadoComponent";
import './TareaComponent.css';
import RespuestaComponent from "./RespuestaComponent/RespuestaComponent";





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
function TareaComponent() {
    // Logica para agregar preguntas a la tarea
    let enunciado = {
        pregunta: "¿Cuál es la fórmula para la resistencia?",
        dificultad: "Fácil",
        tipo: "Alternativas",
        dibujo: false
    };

    let alternativas = [
        {
            respuesta: "R = V/I",
            correcta: true
        },
        {
            respuesta: "R = I/V",
            correcta: false
        },
        {
            respuesta: "R = V+I",
            correcta: false
        },
        {
            respuesta: "R = I-V",
            correcta: false

        }
    ];



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
                        position: 'fixed',
                        boxShadow:  '10px 10px 15px 0px rgba(33,33,33,.7)',

                    }}>

                        <EnunciadoComponent enunciado={enunciado}/>

                        <RespuestaComponent respuestas={alternativas}/>

                    </Item2>


                </Stack>

        </div>
    );
}

export default TareaComponent;
