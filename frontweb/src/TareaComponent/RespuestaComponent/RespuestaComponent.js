import React from "react";

import {Box, Button, ButtonGroup, Paper, styled} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';
import './RespuestaComponent.css';



const Button2 = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    background: theme.palette.primary.main,
    width: '80%',
    borderRadius: '0',
    elevation: 20,
    top: '90px',
    position: 'fixed',
    maxHeight: '200px',
    boxShadow:  '10px 10px 15px 0px rgba(33,33,33,.7)',
    transform: 'rotate(-1.5deg)',

}));

function RespuestaComponent({respuestas}) {

    // let respuestas = [ '1', '2', '3', '4'];
    const buttons = [
        { label: 'TL', position: { top: 8, left: 8 } },
        { label: 'TR', position: { top: 8, right: 8 } },
        { label: 'BL', position: { bottom: 8, left: 8 } },
        { label: 'BR', position: { bottom: 8, right: 8 } },
    ];





    return (
        <>
            <Box
                className="Respuesta"
                display="flex"

            >

                <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 12 } }>
                    {respuestas?.map((respuesta,index) => (

                            <Button key={buttons[index].label} className="RespuestaButton" variant="contained"
                                    sx={{position: 'absolute',
                                        ...buttons[index].position}}
                            >{respuesta.respuesta}</Button>

                    ))}




                </Grid>

            </Box>

        </>
    );
}

export default RespuestaComponent;
