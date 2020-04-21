import React from 'react';
import {Col} from 'antd';
import LazyLoad from 'react-lazyload'
import {OverPack} from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class ProjectCard extends React.Component {
    render() {
        return (
            <Col sm={24} md={12} lg={8} className="col-card">
                <OverPack playScale="0.25">
                    <TweenOne animation={{ opacity: 0, type: 'from', delay: 25 * this.props.index, duration: 500}} key={`ProjectCard-${this.props.index}`}>
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
                    </TweenOne>
                </OverPack>
            </Col>
        )
    }
    handleClick = (link) => {
        window.open(link);
    }
}

export default ProjectCard;