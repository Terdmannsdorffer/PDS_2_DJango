import React from "react";

import {Box, Paper, styled, Typography} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';
import CircuitDiagramComponent from "../CircuitDiagramComponent/CircuitDiagramComponent";




function EnunciadoComponent({enunciado}) {
    // Logica para agregar preguntas a la tarea


    enunciado.dibujo = true;
    let dibujo = {  "type": "CircuitDiagram",
        "components": [
            {
                "type": "battery",
                "voltage": 12
            },
            {
                "type": "resistor",
                "orientation": "horizontal",
                "resistance": 100
            },
            {
                "type": "resistor",
                "orientation": "vertical",
                "resistance": 200
            }]
            }

    return (
        <>
            <div className="Enunciado" position={'relative'}>
                {
                    enunciado.dibujo ?
                        <><Box
                            sx={{
                                width: 500,
                                height: 500,
                                backgroundColor: 'background.paper',
                                boxShadow: 10,
                            }} >
                            <CircuitDiagramComponent data={dibujo}/>
                        </Box>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} position={'relative'}>
                            {enunciado.pregunta}
                        </Typography></>

                        : <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} position={'relative'}>
                            {enunciado.pregunta}
                        </Typography>
                }
            </div>
        </>

    );
}

export default EnunciadoComponent;
