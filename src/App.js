import React, { Component } from 'react';
import Customers from './components/customers';

    class App extends Component {
      state = {
        customers: []
      }

      componentDidMount() {
        fetch(process.env.REACT_APP_CUSTOMER_HOST+'/customer/all', {
          method: 'get',
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ customers: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <Customers customers={this.state.customers} />
        )
      }
    }

    export default App;