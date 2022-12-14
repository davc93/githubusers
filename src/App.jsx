import React from 'react';
import { Container } from '@mui/material'
import Searcher from './components/Searcher';
import { gettingUserApi } from './services/users';
import UserCard from './containers/UserCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [inputUser, setInputUser] = React.useState('davc93');
  const [userState, setUserState] = React.useState('');
  const [notFound, setNotFound] = React.useState(false);

  const gettingUser = async (user) => {
    const userResponse = await gettingUserApi(user)
    console.log(userResponse);
    if (userState == 'davc93') {
      localStorage.setItem('davc93', userResponse)
    }

    if (userResponse.message == 'Not Found') {
      const { davc93 } = localStorage
      setInputUser(davc93);
      setNotFound(true);

    } else {
      setNotFound(false)
      setUserState(userResponse)
    }
  }

  React.useEffect(() => {

    gettingUser(inputUser)
  }, [inputUser])
  return (
    <Container sx={{
      color: 'white',
      background: '#25316D',
      width: '80vw',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} notFound={notFound}></Searcher>
      <UserCard
        userState={userState}
      />

    </Container>


  );
}

export default App;
