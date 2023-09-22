import { Box } from "@mui/system";
import { AppBar, Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NewNavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ mt: 8 }}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: 0, bottom: "auto", borderRadius: 0.6 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {" "}
              MetaGen Nutrigenomics Clinic
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            ></Box>
            <Button id="basic-button" color="secondary" href="/home#home">
              Home
            </Button>

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="secondary"
            >
              Services
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Button
                  size="small"
                  id="basic-button"
                  color="primary"
                  href="/services/details/1"
                >
                  Service 1
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button
                  size="small"
                  id="basic-button"
                  color="primary"
                  href="/services/details/2"
                >
                  Service 2
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button
                  size="small"
                  id="basic-button"
                  color="primary"
                  href="/services/details/3"
                >
                  Service 3
                </Button>
              </MenuItem>
            </Menu>
            <Button id="basic-button" color="secondary" href="/doctors#doctors">
              Doctors
            </Button>
            <Button
              id="basic-button"
              color="secondary"
              href="/appointment#appointment"
            >
              Appointment
            </Button>
            <Button id="basic-button" color="secondary" href="/about#about">
              About
            </Button>
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default NewNavBar;
