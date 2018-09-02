import React, { Component } from 'react';
import './App.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    age: '',
    open: false,
    current: ''
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChange = event => {
    this.setState({ current: event.target.value });
    this.handleClose();
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
        <div>
        <FormControl>
          <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
          <Select
            open={this.state.open}
            onClose={()=>{}}
            onOpen={this.handleOpen}
            value={this.state.current}
            onChange={this.handleChange}
            inputProps={{
              name: 'age1',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </div>
      </div>
    );
  }
}

export default App;
