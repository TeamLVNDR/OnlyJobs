import { Button, makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
    root: {
    
    },
    paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80vh',
    fontSize: '3rem',
    position: 'relative',
    },
    heroText: {
        // position: 'absolute',
        // margin: '30vh 0 0 10vw',
        fontWeight: '700',
        color: theme.palette.secondary.main,
    },
    button: {
        // position: 'absolute',
        // margin: '40vh 0 0 -15%'
    },
    paperBody: {
        position: 'absolute',
        margin: '30vh 0 0 10vw',

    }
}))

const LandingBody = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={6} >
                    <Paper className={classes.paper} square={true}>
                        <div className={classes.paperBody}>
                            <div className={classes.heroText}>For Graduates</div>
                            <Button className={classes.button} variant="contained" color="primary" >Click Me</Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} square={false}>
                        <div className={classes.paperBody}>
                            <div className={classes.heroText}>For Employers</div>
                            <Button className={classes.button} variant="contained" color="primary" >Click Me</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingBody