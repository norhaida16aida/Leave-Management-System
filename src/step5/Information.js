import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import RequestForm from '../step6/RequestForm'
import ListTable from '../step6/ListTable'

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [
                {
                    name: 'Chinasoft Employee',
                    fDate: new Date().toDateString(),
                    tDate: new Date().toDateString(),
                    reason: 'Medical check',
                    status: 'Approved'
                },
                {
                    name: 'HSBC Employee',
                    fDate: new Date().toDateString(),
                    tDate: new Date().toDateString(),
                    reason: 'Technical Training',
                    status: 'Not Approved'
                }
            ]
        };
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
        const {match} = this.props;
        return (
            <div>
                <div>
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


export default Information;
