import React from 'react';
import { OverPack } from 'rc-scroll-anim';

let text = [
    '> root@pwp.app:~# ./about',
    'Starting about pwp.app...',
    'Program started.',
    '==============================',
    'pwp.app is a civil software development team,',
    'team created in 2019, dedicated to turning great ideas into visible code and available tools.',
    'We focus on front-end technology to explore the technological frontier,',
    'contribute the results we get based on our ideas to the open source community.',
    'We make programming meaningful, creative, and valuable,',
    'we just do what we want.',
    '==============================',
    'Exit code 0.',
    '> root@pwp.app:~# '
];

class Terminal extends React.PureComponent{
    state = {
        terminalInner: '',
        cursorBlink: false,
    }
    startTyping = () => {
        let current;
        let interval = setInterval(() => {
            if (current && current.length > 0) {
                this.setState({
                    terminalInner: this.state.terminalInner + current.shift()
                });
            } else {
                if (text.length) {
                    current = text.shift().split('');
                    if (this.state.terminalInner.length > 0) {
                        this.setState({
                            terminalInner: this.state.terminalInner + '\r\n'
                        });
                    }
                } else {
                    this.setState({
                        cursorBlink: true
                    });
                    clearInterval(interval);
                }
            }
        }, 35)
    }
    onChange = () => {
        this.startTyping();
    }
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
                <OverPack always={false} onChange={this.onChange} >
                    <div className="terminal-body">
                        <pre>{this.state.terminalInner}<span className={`cursor ${this.state.cursorBlink ? 'cursor-blink' : null}`}></span></pre>
                    </div>
                </OverPack>
            </div>
        );
    }
}

export default Terminal;