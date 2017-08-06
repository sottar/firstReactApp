// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Body from './components/Body';
import { baseballTeams, soccerTeams } from './teams';
import type { Team } from './Type';

class Index extends React.Component {
  state: {
    type: string,
    teams: Array<Team>
  }

  constructor(props: Object) {
    super(props);

    this.state = {
      type: 'baseball',
      teams: baseballTeams
    };
  }

  handleUpdateTeams = (type: string) => {
    let teams;
    switch (type) {
      case 'baseball':
        teams = baseballTeams;
        break;
      case 'soccer':
        teams = soccerTeams;
        break;
    }
    this.setState({
      type: type,
      teams: teams
    });
  }

  render() {
    return (
      <div>
        <Title
          title='hello react!'
        />
        <Body
          head='teams'
          teams={this.state.teams}
          handleUpdateTeams={this.handleUpdateTeams}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
