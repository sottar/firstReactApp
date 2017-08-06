// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Body from './components/Body';
import type { Team } from './Type';

class Index extends React.Component {
  state: {
    teams: Array<Team>
  }

  constructor(props: Object) {
    super(props);
    const baseballTeams = [
      {
        name: 'ヤクルトスワローズ',
        place: '東京'
      }, {
        name: '読売ジャイアンツ',
        place: '東京'
      }, {
        name: '阪神タイガース',
        place: '兵庫'
      }, {
        name: '横浜ベイスターズ',
        place: '神奈川'
      }, {
        name: '広島カープ',
        place: '広島'
      }, {
        name: '中日ドラゴンズ',
        place: '愛知'
      }
    ];
    // const soccerTeams = [
    //   {
    //     name: 'レアル・マドリード',
    //     place: 'スペイン'
    //   }, {
    //     name: 'リヴァプール',
    //     place: 'イングランド'
    //   }, {
    //     name: 'マンチェスター・ユナイテッド',
    //     place: 'イングランド'
    //   }, {
    //     name: 'ドルトムンド',
    //     place: 'ドイツ'
    //   }, {
    //     name: 'パリ・サンジェルマン',
    //     place: 'フランス'
    //   }, {
    //     name: 'アトレティコ・マドリード',
    //     place: 'スペイン'
    //   }
    // ];

    this.state = {
      teams: baseballTeams
    };
  }

  render() {
    console.log(this.state.teams);
    return (
      <div>
        <Title
          title='hello react!'
        />
        <Body
          head='teams'
          teams={this.state.teams}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
