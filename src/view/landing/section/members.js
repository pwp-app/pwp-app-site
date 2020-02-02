import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Carousel } from 'antd';

class Members extends React.PureComponent {
    render() {
        return (
            <div className="landing-section members" id="members">
                <div className="members-title">
                    <h1><FormattedMessage id="members.title"/></h1>
                </div>
            </div>
        )
    }
}

export default Members;