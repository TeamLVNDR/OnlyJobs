import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  } from '@material-ui/core';
import FilterCard from './FilterCard'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.bodyBackground.main,
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    bodyContainer: {
        backgroundColor: theme.palette.boxBackground.main,
        width: '80vw',
        height: '100px',
        marginTop: '2rem',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
      
}))

const jobTypeOptions = [
    {
        value: 'Any',
    },
    {
        value: 'Full-time'
    }
]

const datePostedOptions = [
    {
        value: 'Any',
    },
    {
        value: 'Last Week'
    },
    {
        value: 'Last Month'
    },
    {
        value: 'Last Six Months'
    },
    
]

const remoteWorkingOptions = [
    {
        value: 'Any',
    },
    {
        value: 'Remote Only',
    },
    {
        value: 'COVID Remote',
    },
    {
        value: 'In Office',
    },
]

const companySizeOptions = [
    {
        value: 'Any',
    },
    {
        value: 'Start Up',
    },
    {
        value: 'Corporate',
    },
]

const HomeBody = () => {

    const classes = useStyles();
    const [jobType, setJobType] = useState('');
    const [datePosted, setDatePosted] = useState('')
    const [remoteWorking, setRemoteWorking] = useState('')
    const [companySize, setCompanySize] = useState('')

    

    return (
        <div className={classes.container}> 
            <div className={classes.bodyContainer}>

                <form>
                    <FilterCard name="jobType" state={jobType} setState={setJobType} labelName="Job Type" menuItems={jobTypeOptions} />
                    <FilterCard name="datePosted" state={datePosted} setState={setDatePosted} labelName="Date Posted" menuItems={datePostedOptions} />
                    <FilterCard name="remoteWorking" state={remoteWorking} setState={setRemoteWorking} labelName="Remote Working" menuItems={remoteWorkingOptions} />
                    <FilterCard name="companySize" state={companySize} setState={setCompanySize} labelName="Company Size" menuItems={companySizeOptions} />
                </form>
                
            </div>
        </div>
    )
}

export default HomeBody
