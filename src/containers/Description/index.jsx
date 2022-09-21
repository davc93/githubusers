import { Stack, Typography } from '@mui/material';

import React from 'react'
import LocalInformation from '../../components/LocalInformation';
import PaperInformation from '../../components/PaperInformation';

function Description(props) {

    const {userState} = props;
    const {bio} = userState

  return (
    <React.Fragment>
        <Stack>
        {bio ? <Typography>{bio}</Typography> : <Typography>Sin bio</Typography>}


        </Stack>
        <PaperInformation userState={userState} />
        {/* <LocalInformation /> */}
    </React.Fragment>
  )
}

export default Description