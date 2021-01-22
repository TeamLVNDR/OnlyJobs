import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#0B132B',
    color: '#FFFFFF',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
//   lightBtn: {
//       color: theme.palette.primary.contrastText,
//       border : `1px solid ${theme.palette.primary.contrastText}`
//   },

}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
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
        <Button className="btn" variant="contained" size="small" color='secondary'>
          Log In
        </Button>
        <Button className="btn" variant="outlined" size="small" color='secondary'>
          Sign up
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}