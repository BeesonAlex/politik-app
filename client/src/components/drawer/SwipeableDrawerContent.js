import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import menuIcon from '../../assets/icons/menu-white.svg';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  
  export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
          {['Home', 'Countries',].map((text, index) => (
            <ListItem button key={text}>
                <Link to={`/${text}`}>
              <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Mission', 'Contact',].map((text, index) => (
            <ListItem button key={text}>
            <Link to={`/${text}`}>
              <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    // const fullList = side => (
    //   <div
    //     className={classes.fullList}
    //     role="presentation"
    //     onClick={toggleDrawer(side, false)}
    //     onKeyDown={toggleDrawer(side, false)}
    //   >
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // );
  
    return (
      <div className="navbar__menu-icon">
        <Button onClick={toggleDrawer('left', true)}><img src={menuIcon} alt="hamburger-menu" /></Button>
        <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {sideList('left')}
        </SwipeableDrawer>
      </div>
    );
  }
  