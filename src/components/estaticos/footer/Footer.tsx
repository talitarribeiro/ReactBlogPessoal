import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>

          <Box style={{ backgroundColor: "#A6A6A6", height: "145px" }}>
           
            <Box display="flex" alignItems="center" justifyContent="right" className="marginredes">
              <a href="https://www.facebook.com/generationbrasil" target="_blank">
                <FacebookIcon style={{ fontSize: 45, color: "#7E5E6F" }} />
              </a>
            </Box >

            <Box display="flex" alignItems="center" justifyContent="right" className="marginredes">
              <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                <InstagramIcon style={{ fontSize: 45, color: "#7E5E6F" }} />
              </a>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="right" className="marginredes">
              <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                <LinkedInIcon style={{ fontSize: 45, color: "#7E5E6F" }} />
              </a>
            </Box>
          </Box>

         
          
          <Box style={{ backgroundColor: "#A6A6A6", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography  align="center" gutterBottom style={{ color: "#7E5E6F"}} > ©2021 copyright: toca do gato  </Typography>
            </Box>
            <Box>
              <a target="_blank" href="">
                <Typography  className="semsublinhado" gutterBottom style={{fontWeight: "bold", color: "#7E5E6F"}} align="center"></Typography>
              </a>
            </Box>
            </Box>
        
        </Grid>
      </Grid>
    </>
  )
}

export default Footer;