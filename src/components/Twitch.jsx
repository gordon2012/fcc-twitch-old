import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators';

export const Twitch = React.createClass({
    getList: function() {
        return this.props.list || [];
    },

    handleClick: function(entry) {
        this.props.fetchUserData(entry);
    },

    render: function() {
        const {list, users} = this.props;
        return <div className="twitch">
            <div className="list">
                <h3>List:</h3>
                {this.getList().map( entry =>
                    <button key={entry} onClick={() => this.handleClick(entry)}>{entry}</button>
                )}
            </div>
            {users &&
                <div className='users'>
                    <h3>Users:</h3>
                    <ul>
                        {list.map((user, i) =>
                            <li key={i} style={{'border': '1px solid black', 'marginBottom': '4px'}}>
                                {user in users ?
                                    <div>
                                        <h4>{users[user].display_name}</h4>
                                        <p>{users[user].bio}</p>
                                    </div>
                                :
                                    <p>Loading...</p>
                                }
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        list: state.list,
        users: state.users
    }
}

export const TwitchContainer = connect(
    mapStateToProps,
    actionCreators
)(Twitch);
