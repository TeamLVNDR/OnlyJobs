import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    
}))


const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <footer>
                <Typography variant="body1">My sticky footer can be found here.</Typography>
            </footer>
        </div>
    )

}

export default Footer