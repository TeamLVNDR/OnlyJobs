import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../componentStyles/header.css'
import { Input } from '@material-ui/core';
import { useViewport } from '../hooks'
import MobileNav from './MobileNav';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    padding: '15px 50px',
    height: '66px'
  },
  mobileHeader: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    padding: '15px 20px',
    height: '66px'
  },
  underline: {
    color: 'white',
    borderBottom: '2px solid white',
    width: '22vw',    
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
  const {width} = useViewport();

  return (
    <React.Fragment>
      <Toolbar className={classes.mobileHeader} color="secondary" >
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
          {width > 650 ?
            <form autoComplete="off" noValidate >
            <Input placeholder="Search by Job Title" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <div className="vr"></div>
            <Input placeholder="Search by Location" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            <Button className={classes.searchButton} variant="contained" color="secondary">Search</Button>
          </form> :
          <></>}
          
          <Router>
            <MobileNav />
            <Switch>
              <Route path='/' />
            </Switch>
          </Router>
        </div>
      </Toolbar>
    </React.Fragment>
  )
}

export default function Header(props) {
  const { width } = useViewport();
  const breakpoint = 900;
  return width > breakpoint ? <DesktopHeader /> : <MobileHeader />

}