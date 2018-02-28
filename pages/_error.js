// ./pages/_error.js
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, xhr }) {
    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return { statusCode }
  }

  render() {
    return (
      <p>{
        this.props.statusCode
          ? `自定义错误 An error ${this.props.statusCode} occurred on server`
          : '自定义错误 An error occurred on client'
      }</p>
    )
  }
}