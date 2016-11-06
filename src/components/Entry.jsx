import React from 'react';

export default React.createClass({
    render: function() {
        const {display_name, bio} = this.props.user;
        return <li style={{'border': '1px solid black', 'marginBottom': '4px'}}>
            <h3>{display_name}</h3>
            <p>{bio}</p>
        </li>;
    }
});
