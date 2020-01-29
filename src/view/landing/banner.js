import React from 'react';
import { FormattedMessage } from 'react-intl';

class Banner extends React.PureComponent {
    render () {
        return (
            <div className="landing-section-wrapper banner-wrapper" id="banner">
                <div className="banner-title">
                    pwp.app
                    <p className="banner-subtitle"><FormattedMessage id="banner.subtitle"/></p>
                </div>
            </div>
        );
    }
}

export default Banner;