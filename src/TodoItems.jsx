import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItems({todos, toggleComplete,removeTodo}) {
    const labelId = `checkbox-list-label-${todos.id}`;

    return (
        <ListItem
            secondaryAction={
                <IconButton aria-label="delete" size="large" onClick={()=>{removeTodo(todos.id)}}>
                    <DeleteIcon  />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined}
                dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todos.completed}
                        tabIndex={-1}
                        disableRipple
                        onClick={() => toggleComplete(todos.id)}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} style={{textDecoration:todos.completed?'line-through':'none'}} primary={todos.items} />
            </ListItemButton>
        </ListItem>
    );
}
