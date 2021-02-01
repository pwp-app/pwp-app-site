import React from 'react'
import { Row, Col } from 'antd';

class Header extends React.PureComponent {
  render () {
    return (
      <div className="header-wrapper">
        <Row className="header">
          <Col span={12}>
            <div className="header-logo">
              <img src="https://img.backrunner.top/pwp_official/pwp.app.png" alt=""/>
              <span>pwp.app</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;