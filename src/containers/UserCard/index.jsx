import { Grid, CardMedia, Stack } from "@mui/material";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../Description";
function UserCard(props) {
  const { userState } = props;

  const { avatar_url } = userState;

  return (
    <Grid 
      container 
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
      >
      <Grid item xs={12} md={3}>
        <CardMedia sx={{
          borderRadius:'50%',
          marginLeft:'10px'
        }} component="img" alt="Github User" image={avatar_url} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Stack
        direction='column'
        spacing={1}
        sx={{
          margin: '30px'
        }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />

        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserCard;
