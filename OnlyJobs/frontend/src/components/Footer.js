import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    hold: {

    }
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <footer>
                <Typography className={classes.hold} variant="body1">My sticky footer can be found here.</Typography>
            </footer>
        </div>
    )

}

export default Footer