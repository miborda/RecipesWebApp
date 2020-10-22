import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Grid'
import Grid from './Components/Grid';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Grid />
      </div>
    );
  }
}

export default App;