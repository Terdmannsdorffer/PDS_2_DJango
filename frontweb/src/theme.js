import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#033f8c',
        },
        secondary: {
            main: '#f1df13',
        },
        warning: {
            main: '#0470a6',
        },
        background: {
            default: '#4a4949',
            paper: '#ffffff',
        },
        error: {
            main: '#f44336',
        },
        info: {
            main: 'rgba(162, 250, 163, 0.5)',
        },
        sand: {
            main: '#d29f63',
        }




    },
    spacing: 8,
});



export default theme;




