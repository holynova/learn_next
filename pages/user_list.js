import React, { Component } from 'react';
import axios from 'axios';
import Box from '../components/Box.jsx'
import Link from 'next/link';

const log = console.log.bind(console);

class UserList extends Component {
  static async getInitialProps({ query }) {
    // log('getInitialProps')
    let { number } = query
    // if(process.browser){

    // }
    const url = {
      football: 'http://api.football-data.org/v1/competitions/426/leagueTable',
      userList: "https://randomuser.me/api/?results=" + number,
    }
    const res = await axios.get(url.userList);
    // log('res.results', res.data.results)
    return { data: res.data.results }
  }
  render() {
    return (
      <div>
        <h1>user list</h1>
        <Link href='/'> home</Link>

        {/* <div>{JSON.stringify(this.props.matchData)}</div> */}
        <Box list={this.props.data} ></Box>
      </div>
    )
  }
}
export default UserList;