import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators';
import Entry from './Entry';

export const Twitch = React.createClass({
    getList: function() {
        return this.props.list || [];
    },

    handleClick: function(entry) {
        this.props.fetchUserData(entry);
    },

    render: function() {
        const {users} = this.props;
        const userlist = users ?
            Object.keys(users).map(key => users[key])
        :
            [];

        return <div className="twitch">
            <header>
                <h1>Twitch.tv User Stream Viewer</h1>
            </header>
            <div className="users">
                {userlist.map((user, i) =>
                    <Entry key={i} user={user} />
                )}
            </div>
            <hr />
            <pre><code>{JSON.stringify(userlist[0], null, 2)}</code></pre>
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
