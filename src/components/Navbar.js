import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar 
          title="App Navbar"
          onClick={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
        >
          <MenuItem onClick={this.handleClose}><Link to="/">Search Page</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to="/detail">Detail Page</Link></MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Navbar;