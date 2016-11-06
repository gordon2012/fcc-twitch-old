import React from 'react';

export default React.createClass({
    render: function() {
        return <li>
            <h3>{this.props.name}</h3>
            <p></p>
        </li>;
    }
});