import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function SideBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setOpen(open);
    };
  return (
    <div className='iconlist' >
    <IconButton  edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className="right-app-bar">
      <List className='list1'>
        <ListItem>
          <Button onClick={toggleDrawer(true)}>
          <Link to={'./../../screens/tasks/tasks'}><ListItemText primary="משימות" className='listtexxt3'/></Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={toggleDrawer(true)}>
          <Link to={'./../../screens/ChargeManagement/Management'}><ListItemText primary="ניהול חיובים" className='listtexxt4'/></Link>
          </Button>
        </ListItem>
        <ListItem>
          <Button onClick={toggleDrawer(true)}>
          <Link to={'./../../screens/Letters/Letters'}><ListItemText primary="מכתבים" className='listtexxt5'/></Link>
          </Button>
        </ListItem>
      </List>
    </Drawer>
  </div>
    )
}

export default SideBar