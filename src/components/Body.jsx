// @flow
import React from 'react';
import _ from 'lodash';
import type { Team } from '../Type';

export default class Body extends React.Component {
  props: {
    head: string,
    teams: Array<Team>
  }

  constructTeams = (teams: Array<Team>) => {
    let teamElements = [];
    _.forEach(teams, (team: Team, i: number) => {
      teamElements.push(
        <li key={i}>
          <p className="name"><b>{team.name}</b></p>
          <p className="place">{team.place}</p>
        </li>
      );
    });
    return teamElements;
  }

  render() {
    return (
      <div>
        <h2>{this.props.head}</h2>
        <ul>
          {this.constructTeams(this.props.teams)}
        </ul>
      </div>
    );
  }
}
