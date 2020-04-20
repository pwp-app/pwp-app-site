import React from 'react';
import {Icon} from 'antd';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="footer-text">
                    <span>Made by BackRunner. Powered by React & Antd.<i><Icon type="github" onClick={this.openGitHub}/></i></span>
                </div>
            </div>
        );
    }
    openGitHub(){
        window.open('https://github.com/backrunner/pwp.app');
    }
}

export default Footer;