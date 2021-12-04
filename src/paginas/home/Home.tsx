
import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom  className="fonte" component="h3" align="center" style={{ color: "#826776", fontWeight: "bold" }}>seja bem-vindo(a) à toca do gato!</Typography>
            <Typography variant="h6" gutterBottom className="fonte" component="h6" align="center" style={{ color: "#7E5E6F", fontWeight: "bold" }}>tem dúvidas sobre como cuidar do seu gatinho? </Typography>
            <Typography variant="h6" gutterBottom className="fonte" component="h6" align="center" style={{ color: "#7E5E6F", fontWeight: "bold" }}>nós te ajudamos! </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button style={{fontWeight: "bold", backgroundColor: "#7E5E6F", color: "#ffffff" }}>pergunte aqui</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://i.imgur.com/HS4mfJv.png" alt="" width="500px" height="400px" className="marginlogocentro" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;