import React from 'react';
import {Link} from 'react-router';

class RegionB2 extends React.Component {

    render() {
        return (
            <div className="region__B">

                <h1>Region B2 / South</h1>
                <Link to='east'>Go To East Bracket</Link>
                <Link to='west'>Go To West Bracket</Link>
                <Link to='midwest'>Go To MidWest Bracket</Link>
                <Link to='south'>Go To South Bracket</Link>
            </div>
        );
    }
}

export default RegionB2;
