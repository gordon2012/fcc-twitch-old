import React from 'react';

export default React.createClass({
    getList: function() {
        return this.props.list || [];
    },

    render: function() {
        return <div className="twitch">
            {this.getList().map(entry =>
                <h1 key={entry}>{entry}</h1>    
            )}
        </div>;
    }
});