// @flow
import React from 'react';
import _ from 'lodash';

export default class Body extends React.Component {
  props: {
    head: string,
    teams: Array<{
      name: string,
      place: string
    }>
  }

  constructTeams = (teams: Array<{
    name: string,
    place: string
  }>) => {
    let teamElements = [];
    _.forEach(teams, (team: {name: string, place: string}, i: number) => {
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
