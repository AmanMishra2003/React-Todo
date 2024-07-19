import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';

export default function AddItem({addItem}) {
    let [newItem, setNewItem] = useState('')

    function addNewItem(evt){
        setNewItem(evt.target.value)
    }

    function onSubmit(evt){
        evt.preventDefault();
        // console.log(newItem)
        addItem(newItem)
        setNewItem('')
    }
    return (
        <ListItem>
        <form action="" onSubmit={onSubmit} >
            <TextField
                fullWidth
                id="outlined-basic"
                label="Add Items" 
                variant="outlined"
                value={newItem}
                onChange={addNewItem}
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Create-Todo"
                            edge="end"
                            type='submit'
                          >
                          <Create color='primary'/>
                          </IconButton>
                        </InputAdornment>
                    
                }}
            />
                
            
        </form>
        </ListItem>
    );
  }