import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: [],
        };
        this.loadAllTheData();
    }

    loadAllTheData(){
        fetch('/getInfo')
            .then(data =>
            {
                console.log(data);
                // console.log(data.json());
                return data.json();
            })
            .then(returnedData => this.setState({data: returnedData}));
    }

    render() {
        // console.log(this.state.data);
        const dataMapping = this.state.data.map((eachElement, index)=>{
            return(<div key={index}>
                <p>{eachElement.name}</p>
                <p>{eachElement.address}</p>
                <hr/>
            </div>)
        });
    return (
      <div className="App">
          <h1>Test</h1>
          {dataMapping}
      </div>
    );
  }
}

export default App;
