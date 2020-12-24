import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;
  
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001',
      },
      {
        id: 1,
        name: '김민준',
        phone: '010-0000-0013',
      },
      {
        id: 2,
        name: '박덕자',
        phone: '010-0000-0064',
      },
    ],
    keyword: '',
  }

    handleChange = (e) => {
      this.setState({
        keyword: e.target.value,
      })
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

    handleRemove = (id) => {
      const {information} = this.state;
      this.setState({
        information: information.filter(info => info.id !== id)
      });
    }

    handleUpdate = (id, data) => {
      const { information } = this.state;
      this.setState({
        information: information.map(
          info => {
            if (info.id === id) {
              return {
                id,
                ...data,
              };
            }
            return info;
          }
        )
      })
    }

    render() {
      return (
        <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <input
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색..."
          />
          <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
        </div>
    );
  }
}

export default App;
