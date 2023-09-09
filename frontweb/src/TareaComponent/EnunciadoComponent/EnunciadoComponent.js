import React from "react";

import {Box, Paper, styled, Typography} from "@mui/material";
import {Grid} from "@mui/joy";
import Stack from '@mui/material/Stack';





function EnunciadoComponent({enunciado}) {
    // Logica para agregar preguntas a la tarea





    return (
        <>
            <div className="Enunciado">
                {
                    enunciado.dibujo ?
                        <Box
                            sx={{
                                width: 500,
                                height: 500,
                                backgroundColor: 'background.paper',
                                boxShadow: 10,
                            }} >

                        </Box>  : <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} position={'relative'}>
                            {enunciado.pregunta}
                        </Typography>
                }
            </div>
        </>

    );
}

export default EnunciadoComponent;
