import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 165

    },
}))

const FilterCard = ({name, state, setState, labelName, menuItems}) => {

    const classes = useStyles();
    const handleChange= (event) => {
        setState(event.target.value);
    };

    return (
        <>
        <FormControl variant="outlined" className={classes.formControl} size="small">
         <InputLabel id={`${name}-label`}>{labelName}</InputLabel>
        <Select
        labelId={`${name}-label`}
        id={name}
        value={state}
        onChange={handleChange}
        label={labelName}
        >
        {menuItems.map((item, index) => <MenuItem key={index} value={item.value}>{item.value}</MenuItem>)}
        </Select>   
        </FormControl>
        </>
    )
}

export default FilterCard
