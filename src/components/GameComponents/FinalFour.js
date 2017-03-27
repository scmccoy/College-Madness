import React from 'react';
import FinalMatchup from './FinalMatchup';
import FinalTeam from './FinalTeam';
import FinalRound from './FinalRound';


import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectFour = this.selectFour.bind(this);
      this.state = {
          round2: Dummy2.user_predictions
      }
  }


  selectFour(winTeamId, loseTeamId, roundId) {

    let allTeams = this.props.allTeams;
    let winTeam = this.props.allTeams[winTeamId - 1];
    let loseTeam = this.props.allTeams[loseTeamId - 1];
    let teams2 = this.props.two;
    let teams2Diff = [];

    console.log('in f4 - select Team ', winTeam);


    if (roundId === 'round_4') {
      winTeam.predicted_wins = 5;
      loseTeam.predicted_wins = 4;

      teams2Diff = teams2.slice();
      teams2Diff[0] = winTeam;

      this.setState({round2: teams2Diff});
     }

<<<<<<< HEAD
    componentDidMount() {
    let round4 = [1,2,3,4];
    round4[0] = this.props.teams[0];
    round4[1] = this.props.teams[1];
    round4[2] = this.props.teams[2];
    round4[3] = this.props.teams[3];
    this.setState({round4});
      console.log('componentWillMount in f4 -> ', this.props.teams);
=======
    if (roundId === 'round_2') {
      winTeam.predicted_wins = 6;
      loseTeam.predicted_wins = 5;

      let NattyChamps = [...this.state.round2];
      console.log('pre-set', FinalFour);
      // if (arg1 === 1 || arg1 === 2) {
      //
      // }
      // if (arg1 === 3 || arg1 === 4) {
      //   teams2Diff[2] = arg2;
      // }
      this.setState({round2: teams2Diff});
     }
>>>>>>> 5da97e927f147f396c005d9856e39e9cac706e0f
    }





    render() {

      return (
            <div className="region">
              <FinalRound teams={this.props.teams} round='round_4' selectFour={this.selectFour}/>
              <FinalRound teams={this.state.round2} round='round_2' selectTwo={this.selectTwo}/>
            </div>
        );
    }
}

export default FinalFour;
