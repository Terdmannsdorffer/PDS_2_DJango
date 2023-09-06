import React from "react";
import logo from "../logo.svg";
import {Box, Paper, styled} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';





const Item2 = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: theme.palette.secondary.main,
    width: '80%',
    borderRadius: '0',
    elevation: 20,
    top: '100px',
    position: 'fixed',
    maxHeight: '200px',
    boxShadow:  '10px 10px 15px 0px rgba(33,33,33,.7)',
    // transform: 'rotate(-1.5deg)',

}));
function TareaComponent() {
    // Logica para agregar preguntas a la tarea





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
                        alignContent: 'center',
                    }}>
                        <p className={"Pregunta"}>¿Cuánto es 2 + 2?</p>

                    </Item2>


                </Stack>

        </div>
    );
}

export default TareaComponent;
