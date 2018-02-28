import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { } from 'antd';
// import './Box.less';
import axios from 'axios';
// import { log } from '../utils/debugTools'

const log = console.log.bind(console);
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    log('constructor')
  }
  // static async getInitialProps() {
  //   log('getInitialProps')
  //   const url = 'http://api.football-data.org/v1/competitions/426/leagueTable'
  //   const res = await axios.get(url);
  //   console.log('res.data', res.data)
  //   return { matchData: res.data }
  // }
  componentDidMount() {
    log('did mount', this.props)

  }
  componentWillReceiveProps(nextProps) {
    log('will receive')

  }
  genUserList = (users) => {
    return users.map(user => {
      let { id, name, email, picture } = user
      return <li key={user.login.username} >
        <img src={picture.medium} alt="" />
        <span>{`${name.first} ${name.last}`}</span>
        <span>{email}</span>
      </li>
    })
  }
  render() {
    log('this.props.list', this.props.list)
    return (
      <div>
        <h2> users</h2>
        <ul>
          {this.genUserList(this.props.list)}
        </ul>
      </div>
    );
  }
}
// Box.PropTypes = {};
Box.defaultProps = {
  matchData: null,
  list: []
};
export default Box;
