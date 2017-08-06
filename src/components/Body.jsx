// @flow
import React from 'react';
import _ from 'lodash';
import type { Team } from '../Type';

export default class Body extends React.Component {
  props: {
    head: string,
    teams: Array<Team>,
    handleUpdateTeams: Function
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

  updateTeam = (e: Object) => {
    const type: string = e.target.value;
    this.props.handleUpdateTeams(type);
  }
  render() {
    return (
      <div>
        <h2>{this.props.head}</h2>
        <div>
          <label htmlFor="baseball">baseball: </label>
          <input type="radio" name="type" id="baseball" value="baseball" onChange={this.updateTeam}/>
          <label htmlFor="soccer">soccer: </label>
          <input type="radio" name="type" id="soccer" value="soccer" onChange={this.updateTeam}/>
        </div>
        <ul>
          {this.constructTeams(this.props.teams)}
        </ul>
      </div>
    );
  }
}
