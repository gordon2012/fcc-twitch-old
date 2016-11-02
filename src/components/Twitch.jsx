import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators';

export const Twitch = React.createClass({
    getList: function() {
        return this.props.list || [];
    },

    render: function() {
        return <div className="twitch">
            <div className="list">
                <h3>List:</h3>
                {this.getList().map(entry =>
                    <span key={entry} style={{'paddingRight': '8px'}}>{entry}</span>
                )}
            </div>

            <div className='users'>
                <h3>Users:</h3>
            </div>

        </div>;
    }
});

function mapStateToProps(state) {
    return {
        list: state.list
    }
}

export const TwitchContainer = connect(
    mapStateToProps,
    actionCreators
)(Twitch);
