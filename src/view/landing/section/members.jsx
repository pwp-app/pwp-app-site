import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Carousel } from 'antd';
import memberConfig from '../../../config/members.json';
import Member from '../components/member';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

function MemberList(){
  const members = [];
  for (let member of memberConfig) {
    members.push(
      <Member avatar={member.avatar} key={member.name} name={member.name} position={member.position} saying={member.saying}></Member>
    )
  }
  return members;
}

class Members extends React.PureComponent {
  render() {
    return (
      <div className="landing-section members" id="members">
        <div className="members-title">
          <h1><FormattedMessage id="members.title"/></h1>
        </div>
        <div className="members-body">
          <OverPack playScale="0.25" hideProps={{ tweenOne: { reverse: true }}}>
            <TweenOne component="" animation={{ opacity: 0, type: 'from', delay: 50, duration: 500}} key="members">
              <Carousel autoplay>
                {MemberList()}
              </Carousel>
            </TweenOne>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default Members;