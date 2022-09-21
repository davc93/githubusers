import { Stack, Typography } from "@mui/material";
import React from "react";


function PrincipalInformation(props) {


    const {
        userState
    } = props;

    const {
        name,
        login,
        location,
        created_at,
    } = userState
  return (
    <React.Fragment>
        <Stack>
            <Typography>{name}</Typography>
            <Typography>{created_at}</Typography>
        </Stack>
        <Typography>{login}</Typography>

    </React.Fragment>

  )
}

export default PrincipalInformation