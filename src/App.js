import React from 'react';
import './App.css'
import UserAddForm from './components/UserAddForm'
import UserList from './components/UserList';

class App extends React.Component{
    constructor() {
      super();
      this.state = {
        background:'black',
        textColor:'white',
        users: []
      };
    }

    handleBackgroundChange (event) {
      const userColor = event.target.value;
      this.setState({background: userColor});
    }

    handleTextColorChange (event) {
      const userTextColor = event.target.value;
      this.setState({textColor: userTextColor});
    }

    componentDidMount(){
      console.log('App component was mounted')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        const myUsers = users.filter(u => u.id <= 3);
        myUsers.forEach(u => u.isGoldClient = true)
        this.setState({users:myUsers});
      })
    }

    render() {
      return(
        <div className="App" style={{background : this.state.background, color : this.state.textColor}}>
          <div>
            <h1>Add people:</h1>
            <UserAddForm />
          </div>
          
          <div>
          <h1>List of peoples</h1>
          <UserList users={this.state.users} />
          </div>

          <div>
          <h2>Change color</h2>
            <label>Background color:</label>
            <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
          </div>
          <div>
            <label>Text color:</label>
            <input type="color" onChange={(event) => this.handleTextColorChange(event)}/>
          </div>
          
        </div>
      );
    }
}

export default App;
