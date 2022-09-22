import { Grid ,Stack, Typography} from '@mui/material'
import React from 'react'
import { Twitter, LocationOn, Language,Business } from '@mui/icons-material';

function LocationInformation(props) {

    const {userState} = props

    const {
        location,
        twitter_username,
        blog,
        company

    } = userState
  return (
    <Grid 
        container
        spacing={2}
        sx={{
            marginTop:'15px'
        }}
    >
        <Grid item xs={12} md={6}>
            <Stack 
                direction='row'
                spacing={2}    
            >
                <LocationOn />
                <Typography>{location}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
            <Stack
                direction='row'
                spacing={2}
            >
                <Twitter />
                { twitter_username ? <Typography>@{twitter_username}</Typography> : 'Not Available'}

            </Stack>
        </Grid>    
        <Grid item xs={12} md={6}>
            <Stack
                direction='row'
                spacing={2}
            >
                <Language />
                { blog ? <a href={`https://${blog}` } target='_blank'><Typography>{blog}</Typography></a>  : 'Not Available' }


            </Stack>
        </Grid>    
        <Grid item xs={12} md={6}>
            <Stack
                direction='row'
                spacing={2}
            >
                <Business />
                { company ? <Typography>{company}</Typography> : 'Not Available'}


            </Stack>
        </Grid>    
    </Grid>
    )
}

export default LocationInformation