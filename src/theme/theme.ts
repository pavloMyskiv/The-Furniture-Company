/** @format */

import {  createTheme, responsiveFontSizes } from "@mui/material";



let theme = createTheme({
  palette: {
    primary: {
      main: '#6c4e28',
      contrastText: '#f5f5f5',
    },
    secondary: {
      main: '#f5f5f5',
      contrastText: '#000',
    },
    text:{
      primary:'#222222',
      secondary:'#f5f5f5',
  },
  background:{
    default:'#cab9a2',
    paper:'#a78768'
  }
  },
  
});
theme = responsiveFontSizes(theme);




export default theme