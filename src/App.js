import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

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
          <PhoneInfoList data={this.state.information}/>
        </div>
    );
  }
}

export default App;
