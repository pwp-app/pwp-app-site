import React from 'react'

class Thanks extends React.PureComponent {
    render() {
        return (
            <div className="thanks">
                <div className="thanks-title">
                    <h1>特别感谢</h1>
                </div>
                <div className="thanks-desc">
                    <p><a href="https://werhw.cn" rel="noopener noreferrer" target="_blank">HelloWorld 技术协会</a></p>
                </div>
            </div>
        )
    }
}

export default Thanks;