import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';

function Header() {
  // State for profile menu anchor
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [course,setCourse] = React.useState('certification courses');
  const [service,setService] = React.useState('Our services');

  const handleMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo on the top left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        {/* Certification Courses Select */}
        
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label">
          <MenuItem value="course1">Course 1</MenuItem>
          <MenuItem value="course2">Course 2</MenuItem>
          <MenuItem value="course3">Course 3</MenuItem>
        </Select>

        {/* Our Services Select */}
        <Select label="Our Services">
          <MenuItem value="service1">Service 1</MenuItem>
          <MenuItem value="service2">Service 2</MenuItem>
          <MenuItem value="service3">Service 3</MenuItem>
        </Select>

        {/* Profile Icon with Dropdown */}
        <IconButton
          size="large"
          color="inherit"
          onClick={handleMenuOpen}
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id="menu-appbar"
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
