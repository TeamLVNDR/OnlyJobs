import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../componentStyles/header.css'
import { Input } from '@material-ui/core';
import { useViewport } from '../hooks'


const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    padding: '15px 50px'
  },
  underline: {
    color: 'white',
    borderBottom: '2px solid white',
    width: '25vw',
    margin: '0 10px'
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100% '
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSearch: {
    flex: 3
  },
  toolbarButtons: {
    flex: 1,
  },
  
  // toolbarSecondary: {
  //   justifyContent: 'space-between',
  //   overflowX: 'auto',
  // },
  // toolbarLink: {
  //   padding: theme.spacing(1),
  //   flexShrink: 0,
  // },
//   lightBtn: {
//       color: theme.palette.primary.contrastText,
//       border : `1px solid ${theme.palette.primary.contrastText}`
//   },

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
            className={classes.toolbarTitle}
          >
            Only Jobs
          </Typography>

          <form autoComplete="off" noValidate className={classes.toolbarSearch}>
            <Input placeholder="Search by Job Title" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
            {/* <div className="vr"></div> */}
            <Input placeholder="Search by Location" variant="filled" inputProps={{'aria-label': 'description', className:classes.underline}} color='secondary'/>
          </form>

          <div className={classes.toolbarButtons}>
            <div className="test">
              <Button className="btn" variant="outlined" color='secondary'>
                Log In
              </Button>
              <Button className="btn" variant="contained" color='secondary'>
                Sign up
              </Button>

            </div>

          </div>

        </div>
      </Toolbar>
    </React.Fragment>
  )
}

export default function Header(props) {
  const { width } = useViewport();
  const breakpoint = 620;
  if (width > breakpoint){
    return <DesktopHeader />
  }
  else {
    return (
      <h1>test</h1>
    )
  }

}