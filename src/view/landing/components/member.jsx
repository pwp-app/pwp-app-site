import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class Member extends Component {
  render() {
    return (
      <div className="member">
        <div className="member-avatar">
          <LazyLoad height={102}>
            <img src={this.props.avatar} alt=""/>
          </LazyLoad>
        </div>
        <div className="member-desc">
          <p className="member-desc-name">{this.props.name}</p>
          <p className="member-desc-position">{this.props.position}</p>
          <p className="member-desc-saying">" {this.props.saying} "</p>
        </div>
      </div>
    )
  }
}

export default Member;