import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Popover, Slider, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    popoverContainer:{
        width: '300px',
        height: '150px',
        backgroundColor: theme.palette.boxBackground.main,
        padding: '20px 20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: '10px',
    },
    buttonColors: {
        color: 'rgba(0, 0, 0, 0.5)',
        border: `1px solid ${theme.palette.filterButton.main}`,
        "&:hover": {
            border: '1px solid black',
            backgroundColor: 'transparent'
        },
    },
}))

const marks = [
    {
        value: 20,
        label: '20K'
    },
    {
        value: 30,
        label: '30K'
    },
    {
        value: 40,
        label: '40K'
    },
    {
        value: 50,
        label: '50K'
    },
    {
        value: 60,
        label: '60K'
    },
    {
        value: 70,
        label: '70K'
    },
    {
        value: 80,
        label: '80K+'
    },
]

const valuetext = (value) => {
    return `${value}K`;
}

const SalaryFilter = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [salary, setSalary] = useState(30)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange = (event, value) => {
        setSalary(value)
    }
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <>
        <Button aria-describedby={id} variant="outlined" onClick={handleClick} endIcon={<ArrowDropDownIcon/>} color='inherit' className={classes.buttonColors}>
          Salary Expectation
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: -20,
            horizontal: 'center',
          }}
        >
            <div className={classes.popoverContainer}>
                <Typography className={classes.typography}>Minimum Salary Expectation (£)</Typography>
                <Slider
                    step={10}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    marks={marks}
                    min={20}
                    max={80}
                    onChange={handleChange}
                    value={salary}
                />

            </div>
        </Popover>
      </>
    )
}

export default SalaryFilter
