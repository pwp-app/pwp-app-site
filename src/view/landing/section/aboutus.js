import React from 'react';
import { FormattedMessage } from 'react-intl';
import Terminal from '../components/terminal';

class About extends React.PureComponent {
    render () {
        return (
            <div class="landing-section about" id="about">
                <div class="about-title">
                    <h1><FormattedMessage id="about.title"/></h1>
                </div>
                <div class="about-main">
                    <Terminal/>
                </div>
            </div>
        )
    }
}

export default About;