import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Sorry mate, you've taken the wrong turn</h2>
            <Link to='/home'>GO back</Link>
        </div>
    );
};

export default NotFound;