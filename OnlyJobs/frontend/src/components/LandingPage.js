import Header from './Header'
import LandingBody from './LandingBody'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: 'flex',
        flexFlow: 'column',
        height: '100%'
    },
    flexHeader: {
        flex: '0 1 auto'
    },
    flexContent: {
        flex: '1 1 auto',
    },
    flexFooter: {
        flex: '0 1 70px',
        backgroundColor: 'red',
        color: 'red'
    }
}))

const LandingPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.flexContainer}>
            <Header className={classes.flexHeader} />
            <LandingBody className={classes.flexContent} />
            <Footer className={classes.flexFooter} />
        </div>
    )
}

export default LandingPage