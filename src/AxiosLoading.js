import React, { Component } from 'react'

class AxiosLoading extends Component {
    state = {
      users: [],
      isLoading: true,
      errors: null
    };

    getUsers() {
        // We're using axios instead of Fetch
        axios
          // The API we're requesting data from
          .get("https://randomuser.me/api/?results=5")
          // Once we get a response, we'll map the API endpoints to our props
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              image: `${user.picture.thumbnail}`
            }))
          )
          // Let's make sure to change the loading state to display the data
          .then(users => {
            this.setState({
              users,
              isLoading: false
            });
          })
          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
      return (
        <React.Fragment>
            <h2>Random User</h2>
      <div>
        {!isLoading ? (
          users.map(user => {
            const { username, name, email, image } = user;
            return (
              <div key={username}>
                <p>{name}</p>
                <div>
                  <img src={image} alt={name} />
                </div>
                <p>{email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
        </React.Fragment>
      );
    }
  }
  
  export default AxiosLoading