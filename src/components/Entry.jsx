import React from 'react';

export default React.createClass({
    render: function() {
        const {display_name, bio, logo, stream} = this.props.user;
        const streaming = stream == null ? '' : 'streaming';
        const notfound = typeof stream !== 'undefined' ? '' : 'notfound';

        return <div className={['entry', streaming, notfound].join(' ')}>
            <img src={notfound ? 'error.png' : logo} alt={name}/>
            <h3>{display_name}</h3>

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
