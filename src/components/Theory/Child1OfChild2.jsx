import React from 'react';

import store from '../../app/context';

const Child1OfChild2 = (props) => {
    const {daddyName} = props;
    const userContext = userContext(store.UserContext);

    return (
        <div>
            <div>Hello I'm Child1OfChild2 component.</div>
            <div>I will rename my grandpa: Parent component</div>
            {/* <div>My grandpa name: {daddyName}</div> */}
            <div>My grandpa name: {userContext[ID].name}</div>
            <button
                type="button"
            >
                Random name by id (2)
            </button>
        </div>
    );
};

export default Child1OfChild2;