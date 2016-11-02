import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators';

export const Twitch = React.createClass({
    getList: function() {
        return this.props.list || [];
    },

    handleClick: function(entry) {
        this.props.selectUser(entry);
    },

    render: function() {
        const {user} = this.props;
        return <div className="twitch">
            <div className="list">
                <h3>List:</h3>
                {this.getList().map( entry =>
                    <button key={entry} onClick={() => this.handleClick(entry)}>{entry}</button>
                )}
            </div>
            {user &&
                <div className='users'>
                    <h3>User:</h3>
                    <h4>{this.props.user}</h4>
                </div>
            }
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        list: state.list,
        user: state.user
    }
}

export const TwitchContainer = connect(
    mapStateToProps,
    actionCreators
)(Twitch);
