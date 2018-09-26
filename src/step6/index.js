import React, {Component} from 'react';

import Table from './Table'
import Form from './Form'

// 2 places to store data: props and state.
// this.props.characterData = this.state.characters

class App extends Component {
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
        return (
            <div className="container">
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
