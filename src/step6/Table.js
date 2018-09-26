import React, {Component} from 'react';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    );
}

const TableBody = ({cd, rc}) => {

    const rows = cd.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => rc(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
        {rows}
        </tbody>
    );
}

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props;

        return (
            <table>
                <TableHeader/>
                <TableBody
                    cd={characterData}
                    rc={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;