import React from 'react';

class Terminal extends React.PureComponent{
    render() {
        return (
            <div className="terminal">
                <div className="terminal-header">
                    <div className="terminal-header-icon">
                        <span className="icon icon-close"></span>
                        <span className="icon icon-minimize"></span>
                        <span className="icon icon-fullscreen"></span>
                    </div>
                    <div className="terminal-header-title">
                        <span>terminal</span>
                    </div>
                </div>
                <div className="terminal-body">
                    <p>> root@pwp.app:~# ./about</p>
                    <p>> Starting about pwp.app...</p>
                    <p>> Program started.</p>
                    <p>> ==============================</p>
                    <p>> pwp.app is a civil software development team, </p>
                    <p>> team created in 2019, dedicated to turning great ideas into visible code and available tools.</p>
                    <p>> We focus on front-end technology to explore the technological frontier, </p>
                    <p>> contribute the results we get based on our ideas to the open source community.</p>
                    <p>> We make programming meaningful, creative, and valuable, </p>
                    <p>> we just do what we want.</p>
                    <p>> ==============================</p>
                    <p>> Exit code 0.</p>
                    <p>> root@pwp.app:~# <span className="icon-input"></span></p>
                </div>
            </div>
        );
    }
}

export default Terminal;