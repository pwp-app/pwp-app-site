import React from 'react';
import { FormattedMessage } from 'react-intl';
import TweenOne from 'rc-tween-one';

function TweenOneYG(props) {
    const r = (Math.round(Math.random() * 2) - 1) ? 1 : -1;
    return (
      <TweenOne
            component="g"
            animation={{
            y: r * ((Math.random() * 18) + 10),
            yoyo: true,
            repeat: -1,
            duration: (Math.random() * 2500) + 2500,
            ease: 'easeInOutSine',
            }}
        >
            {props.children}
      </TweenOne>
    );
}

class Banner extends React.PureComponent {
    render () {
        return (
            <div className="landing-section banner" id="banner">
                <div className="bg-wrapper">
                    <TweenOne component="" animation={{ opacity: 0, type: 'from', delay: 500 }} key="tween">
                        <svg className="anim-bg">
                            <g id="group-left">
                                <TweenOneYG>
                                    <g id="r-1">
                                        <rect id="rect-1" fill="#959595" transform="rotate(-34.00000, 183 85)" x="162" y="64" width="42" height="42" rx="2" />
                                    </g>
                                </TweenOneYG>
                                <TweenOneYG>
                                    <g id="r-2">
                                        <rect id="rect-2" stroke="#959595" strokeWidth="2" fill="transparent" transform="rotate(16.00000)" x="401" y="176" width="32" height="32" rx="2" />
                                    </g>
                                </TweenOneYG>
                                <TweenOneYG>
                                    <g id="p-1">
                                        <polygon id="poly-1" stroke="#959595" fill="transparent" strokeWidth="2" transform="rotate(45.000000) translate(96, 0) scale(1.2)" points="139 77 152 100 126 100" />
                                    </g>
                                </TweenOneYG>
                                <TweenOneYG>
                                    <g id="c-1">
                                        <circle id="circle-1" fill="#959595" cx="248" cy="436" r="12" />
                                    </g>
                                </TweenOneYG>
                            </g>
                            <g id="group-right" transform="translate(960, 0)">
                                <TweenOneYG>
                                    <g id="c-2">
                                        <circle id="circle-1" stroke="#959595" strokeWidth="2" fill="transparent" cx="125" cy="58" r="28" />
                                    </g>
                                </TweenOneYG>
                                <TweenOneYG>
                                    <g id="p-2">
                                        <polygon id="poly-1" fill="#959595" transform="rotate(-26.000000) translate(-63, 200) scale(1.75)" points="139 77 152 100 126 100" />
                                    </g>
                                    <g id="r-3">
                                        <rect id="rect-2" stroke="#959595" strokeWidth="2" fill="transparent" transform="rotate(-42.00000,218 402)" x="172" y="384" width="36" height="36" rx="2" />
                                    </g>
                                </TweenOneYG>
                            </g>
                        </svg>
                    </TweenOne>
                </div>
                <div className="banner-main">
                    <TweenOne component="" animation={{ opacity: 0, type: 'from', delay: 100}} key="logo">
                        <div className="banner-main-logo">
                            <img src="https://img.backrunner.top/hexo/pwp.app_shadow.png" alt=""/>
                        </div>
                    </TweenOne>
                    <TweenOne component="" animation={{ opacity: 0, type: 'from', delay: 300}} key="text">
                        <div className="banner-main-text">
                            <p className="banner-text-line"><FormattedMessage id="banner.subtitle"/></p>
                            <p className="banner-text-line"><FormattedMessage id="banner.subtitle.2"/></p>
                        </div>
                    </TweenOne>
                </div>
            </div>
        );
    }
}

export default Banner;