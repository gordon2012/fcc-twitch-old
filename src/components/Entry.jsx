import React from 'react';

export default React.createClass({
    render: function() {
        const {name, display_name, bio, logo, stream} = this.props.user;
        const streaming = stream == null ? '' : 'streaming';
        const notfound = typeof stream !== 'undefined' ? '' : 'notfound';

        return <div className={['entry', streaming, notfound].join(' ')}>
            <img src={notfound ? 'error.png' : logo} alt={name}/>

            {notfound ?
                <h3>{display_name}</h3>
            :
                <h3><a href={'https://www.twitch.tv/' + name} target="_blank">{display_name}</a></h3>
            }

                {streaming ?
                    <div>
                        <p><strong>{stream.game}: </strong>{stream.channel.status}</p>
                    </div>
                :
                    notfound ?
                        <div>
                            <p>User not found</p>
                        </div>
                    :
                        <div>
                            <p>{bio}</p>
                        </div>
                }
        </div>;
    }
});
