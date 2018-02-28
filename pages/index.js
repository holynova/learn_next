import React, { Component } from 'react';
import axios from 'axios';

import Box from '../components/Box.jsx'
const log = console.log.bind(console);

class Table extends Component {
  static async getInitialProps() {
    log('getInitialProps')
    const url = {
      football: 'http://api.football-data.org/v1/competitions/426/leagueTable',
      userList: "https://randomuser.me/api/?results=10"
    }
    const res = await axios.get(url.userList);
    log('res.results', res.data.results)
    return { data: res.data.results }
  }
  render() {
    return (
      <div>
        <h1>Table</h1>
        {/* <div>{JSON.stringify(this.props.matchData)}</div> */}
        <Box list={this.props.data} ></Box>
      </div>
    )
  }
}
export default Table;