import React from 'react';
import First from './First'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>App (default)</h1>
        <div className="module">
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default App; 