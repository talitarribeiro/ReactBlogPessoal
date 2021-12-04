
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'


function Navbar() {
  return (
    <>
      <AppBar position="static" className="cor-navbar">
        <Toolbar variant="dense">

          <Box display="flex" justifyContent="start">
            <Box  mx={2} style={{ cursor: "pointer" }} >
            <img src="https://i.imgur.com/HS4mfJv.png" alt="" width="70px" height="60px" />
            </Box>

          <Box display="flex" justifyContent="left" className="margin">
            
            <Box mx={4} style={{ cursor: "pointer" }}>
              <Typography className="fonte">
                postagens
              </Typography>
            </Box>

            <Box mx={4} style={{ cursor: "pointer" }}>
              <Typography className="fonte">
                temas
              </Typography>
            </Box>

            <Box mx={4} style={{ cursor: "pointer" }}>
              <Typography className="fonte">
                cadastrar tema
              </Typography>
            </Box>

            <Box mx={2} style={{ cursor: "pointer" }}>
              <Typography  className="fonte">
                logout
              </Typography>
            </Box>

          </Box>
        </Box>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;