import React from 'react';

export default React.createClass({
    render: function() {
        const {display_name, bio, logo} = this.props.user;
        return <div className="entry">
            <img src={logo} alt={name}/>
            <h3>{display_name}</h3>
            <p>{bio}</p>
        </div>;
    }
});
