import { Stack, Typography } from '@mui/material';

import React from 'react'
import LocationInformation from '../../components/LocationInformation';
import PaperInformation from '../../components/PaperInformation';

function Description(props) {

    const {userState} = props;
    const {bio} = userState

  return (
    <React.Fragment>
        <Stack
        sx={{
          justifyContent:'center'
        }}
        >
        {bio ? <Typography variant="body1">{bio}</Typography> : <Typography>Sin bio</Typography>}


        </Stack>
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
    </React.Fragment>
  )
}

export default Description