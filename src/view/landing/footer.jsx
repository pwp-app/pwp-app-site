import React from 'react';
import { GithubOutlined } from '@ant-design/icons';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="footer-text">
                    <span>Made by BackRunner. Powered by React & Antd.<GithubOutlined className="icon" onClick={this.openGitHub} /></span>
                </div>
            </div>
        );
    }
    openGitHub(){
        window.open('https://github.com/backrunner/pwp.app');
    }
}

export default Footer;