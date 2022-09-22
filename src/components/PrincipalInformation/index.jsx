import { Stack, Typography } from "@mui/material";
import React from "react";


function PrincipalInformation(props) {


    const {
        userState
    } = props;

    const {
        name,
        login,
        created_at,
    } = userState

    const date = new Date(created_at)
  return (
    <React.Fragment>
        <Stack
        direction="row"
        sx={{
            justifyContent:"space-between"
        }}
        
        >
            <Typography variant="h4" >{name}</Typography>
            <Typography variant='subtitle2' >{date.toLocaleDateString()}</Typography>
        </Stack>
        <Typography variant="caption" >{`@${login}`}</Typography>

    </React.Fragment>

  )
}

export default PrincipalInformation