import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Pritam", age: 28 },
      { name: "Manu", age: 29 },
      { name: "John", age: 26 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    //console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Min';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "John Doe", age: 26 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Pritam", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "John", age: 26 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };
  render() {
    const style = {
      backgroundColour: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1> Hi I'm a React App </h1>
        <p>This is really working!</p>

        <button style={style} onClick={() => this.togglePersonsHandler()}>
          Switch Name
        </button>
        { this.state.showPersons ? 
          <div>
            <Person
              click={this.switchNameHandler.bind(this, "Pritam!")}
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
