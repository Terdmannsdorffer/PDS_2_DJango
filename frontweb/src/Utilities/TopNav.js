import React from "react";
import './TopNav.css';
import {Avatar, Box, Button, Container, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import theme from "../theme";


function TopNav() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
             sx={{  color:'primary.main',
                    width: '100%' ,
                    height: '85px',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: '1100',
        }}>
            <Container sx={{ width: 'auto' , height: '85px', marginLeft: 0 , marginRight: 0,  position: 'fixed',
                top: 0, left: 0, right: 0, maxWidth: 'inherit !important', bgcolor: 'primary.main' }}>
                <p className={"AppName"} >Volt Academy</p>
                <Button
                    id="profile-button"
                    aria-controls={open ? 'profile-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ position: 'absolute', top: '16px', left: '16px' }}
                >
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" left={0} position={"absolute"}/>

                </Button>

                <Menu
                    id="profile-menu"
                    spacing={2}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'profile-button',
                    }}

                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Menu>

            </Container>
        </Box>
    );
}



export default TopNav;
