import React from 'react';
import Header from './header';
import Banner from './banner';
import Footer from './footer';
import About from './section/aboutus';
import Projects from './section/projects';
import Members from './section/members';
import Thanks from './section/thanks';
import Discuss from './section/discuss';

class Landing extends React.PureComponent {
  render () {
    return (
      [
        <Header/>,
        <Banner/>,
        <About/>,
        <Projects/>,
        <Members/>,
        <Discuss/>,
        <Thanks/>,
        <Footer/>
      ]
    );
  }
}

export default Landing;