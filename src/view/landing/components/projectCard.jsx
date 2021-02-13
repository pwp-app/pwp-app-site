import React from 'react';
import { Col } from 'antd';
import LazyLoad from 'react-lazyload';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class ProjectCard extends React.Component {
  render() {
    return (
      <Col xs={24} sm={24} md={12} lg={8} xxl={6} className="col-card">
        <OverPack playScale="0.1">
          <TweenOne animation={{ opacity: 0, type: 'from', delay: 25 * this.props.index, duration: 500 }} key={`ProjectCard-${this.props.index}`}>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="card" key={`card-${this.props.index}`}>
              <div className="card-logo">
                <LazyLoad height={85}>
                  <img src={this.props.logo} alt=""></img>
                </LazyLoad>
              </div>
              <div className="card-body">
                <div className="card-body-name">
                  <span>{this.props.name}</span>
                </div>
                <div className="card-body-desc">
                  <span>{this.props.desc}</span>
                </div>
              </div>
            </a>
          </TweenOne>
        </OverPack>
      </Col>
    );
  }
}

export default ProjectCard;
