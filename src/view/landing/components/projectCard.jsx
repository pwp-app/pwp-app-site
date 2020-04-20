import React from 'react';
import {Col} from 'antd';
import LazyLoad from 'react-lazyload'
import {OverPack} from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

class ProjectCard extends React.Component {
    render() {
        return (
            <Col span={8} className="col-card">
                <OverPack playScale="0.1">
                    <QueueAnim leaveReverse>
                        <div className="card" key="card" onClick={this.handleClick.bind(this, this.props.link)}>
                            <div className="card-logo">
                                <LazyLoad height={85}>
                                    <img src={this.props.logo} alt=""></img>
                                </LazyLoad>
                            </div>
                            <div className="card-body">
                                <div className="card-body-name"><span>{this.props.name}</span></div>
                                <div className="card-body-desc"><span>{this.props.desc}</span></div>
                            </div>
                        </div>
                    </QueueAnim>
                </OverPack>
            </Col>
        )
    }
    handleClick = (link) => {
        window.open(link);
    }
}

export default ProjectCard;