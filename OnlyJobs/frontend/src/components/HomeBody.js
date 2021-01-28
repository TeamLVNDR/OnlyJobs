import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.bodyBackground.main,
        height: '70vh'
    }
}))

const HomeBody = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}> 
            
        </div>
    )
}

export default HomeBody
