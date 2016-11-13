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
        const {users, streams} = this.props;
        const userlist = typeof users !== 'undefined' ?
            Object.keys(users).map(key => {
                var item = users[key];
                item.stream = typeof streams !== 'undefined' && key in streams ?
                    streams[key]
                :
                    null;
                return item;
            })
        :
            [];

        return <div className="twitch">
            <header>
                <h1>Twitch.tv Status</h1>
            </header>
            <div className="users">
                {userlist.map((user, i) =>
                    <Entry key={i} user={user}/>
                )}
            </div>
            {/*<hr />
            <pre><code>{JSON.stringify(userlist, null, 2)}</code></pre>*/}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        list: state.list,
        users: state.users,
        streams: state.streams
    }
}

export const TwitchContainer = connect(
    mapStateToProps,
    actionCreators
)(Twitch);
