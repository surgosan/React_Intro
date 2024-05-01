import React from 'react';

function Component(props) {
    const { name } = props;

    return (
        <div>
            <p>Hello, {name}!</p>
        </div>
    );
}

export default Component;
