import React from 'react'
import {Stack, TextField , IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'


function Searcher(props) {

    const {
        inputUser,
        setInputUser
    } = props

    const [valueInput, setValueInput] = React.useState('')
    const handleSubmit = (event) => {
        setInputUser(valueInput)
        console.log(inputUser)

    }
    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue);
    }
    console.log(valueInput)
  return (
    <Stack
    direction='row'
    sx={{    
        marginTop:'30px',
        width:'80%'
    }}

    >
        <TextField
        size='small'
        id='outlined-basic'
        label='Github User'
        placeholder='davc93'
        variant='outlined'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
            width:'90%'

        }}>
        </TextField>
        <IconButton
        onClick={handleSubmit}
        sx={{
            left:'-45px'
        }}
        >
        <SearchIcon/>
        </IconButton>
    </Stack>
  )
}

export default Searcher