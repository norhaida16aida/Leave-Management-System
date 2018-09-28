import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import RequestForm from '../components/RequestForm'
import ListTable from '../components/ListTable'

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }

  fetchData() {
    fetch('http://someuri/api/v1/requestData')
      .then(res => res.json())
      .then(data => console.log('data:', data))
  }

  componentDidMount() {
    fetch('/etc/requestData.json')
      .then(res => res.json())
      .then(data => this.setState({requests: data}))
  }

  removeRequest = index => {
    const {requests} = this.state;

    this.setState({
      requests: requests.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    if (character) {
      this.setState({requests: [...this.state.requests, character]});
    }
  };

  render() {
    const {match, user, admin} = this.props;
    return (
      <div>
        <div className="alert-heading">
          {user && user.email && <h1>{user.email}</h1>}
          {admin && admin.email && <h1>{admin.email}</h1>}
          <Link to={`${match.url}/request`}>On Leave Request</Link>&nbsp;|&nbsp;
          <Link to={`${match.url}/list`}>List</Link>
        </div>
        <Route path={`${match.url}/request`} component={RequestForm}/>
        <Route
          path={`${match.url}/list`}
          render={(routeProps) => (
            <ListTable
              requests={this.state.requests}
              removeRequest={this.removeRequest}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admin: state.admin
})

export default connect(
  mapStateToProps
)(Information);
