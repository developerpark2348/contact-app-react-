import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 0;
  
  state = {
    information: [],
  }

    handleCreate = (data) => {
      this.setState({
        information: this.state.information.concat({
          ...data,
          id: this.id++
        })
      });
          {/* ...data 는 밑과 같다.
          name:data.name
          phone: data.phone
          */}
    }

    render() {
      return (
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          {JSON.stringify(this.state.information)}
        </div>
    );
  }
}

export default App;
