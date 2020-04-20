import React from 'react';
import { FormattedMessage } from 'react-intl';
import Terminal from '../components/terminal';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class About extends React.PureComponent {
    render () {
        return (
            <div className="landing-section about" id="about">
                <div className="about-title">
                    <h1><FormattedMessage id="about.title"/></h1>
                </div>
                <OverPack className="about-main" playScale="0.25">
                <TweenOne animation={{ opacity: 0, type: 'from', delay: 50, duration: 500}} key="terminal">    
                        <Terminal/>
                    </TweenOne>
                </OverPack>
            </div>
        )
    }
}

export default About;