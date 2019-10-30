import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { lat: null, errorMessage: '' };

  }

  componentDidMount(){
    console.log('my component was rendered to the screen')
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate(){
    console.log('my component was re-rednered')
  }


  render(){
      if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
      }
      if (!this.state.errorMessage && this.state.lat){
        return <div>Latitude: {this.state.lat}</div>
      }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
