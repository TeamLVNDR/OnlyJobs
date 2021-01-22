import { Button, makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '85vh',
    fontSize: '3rem',
    position: 'relative',
    },
    heroText: {
        position: 'absolute',
        margin: '30% 0 0 20%',
        fontWeight: '700',
        color: theme.palette.secondary.main,
    },
    button: {
        position: 'absolute',
        margin: '40% 0 0 -15%'
    }
}))

const LandingBody = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6} >
                    <Paper className={classes.paper} square={true}>
                        <div className={classes.heroText}>For Graduates</div>
                        <Button className={classes.button} variant="contained" color="primary" >Click Me</Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} square={true} elevation={4}>
                        <div className={classes.heroText}>For Employers</div>
                        <Button className={classes.button} variant="contained" color="primary" >Click Me</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingBody