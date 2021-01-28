import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../componentStyles/header.css'
import { IconButton, Input, Menu, MenuItem } from '@material-ui/core';
import { useViewport } from '../hooks'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    padding: '15px 50px',
    height: '66px'
  },
  underline: {
    color: 'white',
    borderBottom: '2px solid white',
    width: '25vw',    
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    alignItems: 'center'
  },
  searchButton: {
    marginLeft: '20px'
  }
}));

const DesktopHeader = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.header} color="secondary" >
        <div className={classes.headerWrapper}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
          >
            Only Jobs
          </Typography>

          <form autoComplete="off" noValidate >
            <Input placeholder="Search by Job Title" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <div className="vr"></div>
            <Input placeholder="Search by Location" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <Button className={classes.searchButton} variant="contained" color="secondary">Search</Button>
          </form>

          <div>
              <Button className="btn" variant="outlined" color='secondary'>
                Log In
              </Button>
              <Button className="btn" variant="contained" color='secondary'>
                Sign up
              </Button>

          </div>

        </div>
      </Toolbar>
    </React.Fragment>
  )
}

const MobileHeader = () => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.header} color="secondary" >
        <div className={classes.headerWrapper}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
          >
            Only Jobs
          </Typography>

          {/* <form autoComplete="off" noValidate >
            <Input placeholder="Search by Job Title" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <div className="vr"></div>
            <Input placeholder="Search by Location" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <Button className={classes.searchButton} variant="contained" color="secondary">Search</Button>
          </form> */}

          {/* <div>
              <Button className="btn" variant="outlined" color='secondary'>
                Log In
              </Button>
              <Button className="btn" variant="contained" color='secondary'>
                Sign up
              </Button>

          </div> */}
          <IconButton aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon fontSize="large" color="secondary" />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </React.Fragment>
  )
}

export default function Header(props) {
  const { width } = useViewport();
  const breakpoint = 1000;
  return width > breakpoint ? <DesktopHeader /> : <MobileHeader />

}