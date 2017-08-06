// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Body from './components/Body';

class Index extends React.Component {
  render() {
    const teams = [
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
    return (
      <div>
        <Title
          title='hello react!'
        />
        <Body
          head='teams'
          teams={teams}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
