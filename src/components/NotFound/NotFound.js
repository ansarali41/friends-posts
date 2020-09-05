import React from 'react';

const NotFound = () => {
    const notFoundStyle={
        color: 'red',
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={notFoundStyle}>Sorry page not found !<br/> 404!</h1>
        </div>
    );
};

export default NotFound;