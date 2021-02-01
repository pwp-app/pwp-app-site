import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
class Thanks extends React.PureComponent {
  render() {
    return (
      <div className="thanks">
        <OverPack className="about-main" playScale="0.25">
          <TweenOne animation={{ opacity: 0, type: 'from', delay: 50, duration: 500 }} key="terminal">
            <div className="thanks-title">
              <h1>特别感谢</h1>
            </div>
            <div className="thanks-desc">
              <p>HelloWorld 技术协会</p>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Thanks;
