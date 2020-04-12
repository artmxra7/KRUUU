import React, { Component } from "react";
import { Table, Button, Alert } from 'react-bootstrap';

class CrudApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const apiUrl = 'http://127.0.0.1:8000/api/data';

    fetch(apiUrl)
      .then((response) => {
        if (response.code === 0) {
          console.log("SUCCESSS")
          return response.json();
        } else if (response.code === 408) {
          console.log("SOMETHING WENT WRONG")
          this.setState({ requestFailed: true })
        }
      })

      .then(res => res.json())

      .then(parsedJSON => parsedJSON.data.map(data => (
        {
          id: `${data.id}`,
          name: `${data.name}`,
          info: `${data.info}`


        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error))


  }

  render() {
    const { items } = this.state;
    return (
      <div className="boxWhite">
        <h2>Random User</h2>
        {
          items.length > 0 ? items.map(item => {
            const { id, name, info } = item;
            return (

              <div key={id} className="bgCircle">

                <div className="ctr">
                  {name}<br />
                  {info}
                </div>

              </div>
            );
          }) : null
        }
      </div>
    );
  }
}
export default CrudApi;