import React from 'react';
import Team from './Team';

class Matchup extends React.Component {

    render() {
        // console.log('matchup comp props id: ', this.props.id);  the team abbrev
        return (

            <div className="matchup__container">
                <Team update={this.props.update} id={`matchup-${this.props.id}`} team={this.props.team1}/>
                <Team update={this.props.update} id={`matchup-${this.props.id}`} team={this.props.team2}/>
            </div>

        );
    }
}

export default Matchup;