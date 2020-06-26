import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class Discuss extends React.Component {
    render() {
        return(
            <div className="landing-section discuss" id="discuss">
                <OverPack className="about-main" playScale="0.25">
                    <TweenOne animation={{ opacity: 0, type: 'from', delay: 50, duration: 500 }} key="terminal">
                        <div className="discuss-title">
                            <h1>交流营地</h1>
                        </div>
                        <div className="discuss-content">
                            <p className="discuss-content-link">
                                <a href="https://pwp.space" rel="noopener noreferrer" target="_blank">
                                    pwp.space
                                </a>
                            </p>
                            <p>
                                欢迎你前往营地和我们交流，有任何问题都可以在营地内反馈
                            </p>
                        </div>
                    </TweenOne>
                </OverPack>
            </div>
        )
    }
}

export default Discuss;