import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Main/>
      </div>
    );
  }
}

export default App;
