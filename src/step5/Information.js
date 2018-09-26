import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import Form from '../step6/Form'
import Table from '../step6/Table'

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {name: 'Hello world', 'job': "William Jiang"}
            ]
        };
    }

    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    };

    handleSubmit = character => {
        if (character) {
            this.setState({characters: [...this.state.characters, character]});
        }
    };

    render() {
        const {match} = this.props;
        return (
            <div>
                <div>
                    <Link to={`${match.url}/request`}>Request</Link>&nbsp;|&nbsp;
                    <Link to={`${match.url}/list`}>List</Link>
                </div>
                <Route path={`${match.url}/request`} component={Form}/>
                <Route
                    path={`${match.url}/list`}
                    render={(routeProps) => (
                        <Table
                            characterData={this.state.characters}
                            removeCharacter={this.removeCharacter}
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
