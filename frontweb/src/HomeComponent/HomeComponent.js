import React from "react";
import logo from "../logo.svg";
import {Box, Button} from "@mui/material";
import {Stack} from "@mui/joy";
import {useNavigate} from "react-router-dom";

function HomeComponent() {

    const navigate = useNavigate();

    return (
        <div className="Home">

            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                overflow={"scroll"}
                sx={{  mt: '100px', height: "100%", mb: '50px', zIndex: '1'}}


            >


                <Button variant="contained" onClick={() => navigate('/tarea')} >Empezar tarea  </Button>

            </Stack>


        </div>
    );
}

export default HomeComponent;
