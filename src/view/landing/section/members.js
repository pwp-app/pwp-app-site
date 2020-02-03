import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Carousel } from 'antd';
import memberConfig from '../../../config/members.json';
import Member from '../components/member';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function MemberList(){
    const members = [];
    for (let member of memberConfig) {
        members.push(
            <Member avatar={member.avatar} name={member.name} saying={member.saying}></Member>
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
                    <OverPack playScale={0.1}>
                        <QueueAnim leaveReverse>
                            <Carousel autoplay key="members">
                                {MemberList()}
                            </Carousel>
                        </QueueAnim>
                    </OverPack>
                </div>
            </div>
        )
    }
}

export default Members;