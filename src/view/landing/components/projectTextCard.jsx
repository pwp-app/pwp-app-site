import React from 'react';
import { Col } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

class ProjectTextCard extends React.Component {
  render() {
    return (
      <Col span={24} className="col-card col-card-text">
        <OverPack playScale="0.25">
          <TweenOne animation={{ opacity: 0, type: 'from', delay: 25 * this.props.index, duration: 500 }} key={`ProjectTextCard-${this.props.index}`}>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="card card-text" key={`card-text-${this.props.index}`} onClick={this.handleClick.bind(this, this.props.link)}>
              <div className="card-body">
                <span>{this.props.name}</span>
              </div>
            </a>
          </TweenOne>
        </OverPack>
      </Col>
    );
  }
  handleClick = (link) => {
    window.open(link);
  };
}

export default ProjectTextCard;
