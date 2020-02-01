import React from 'react';
import Header from './header';
import Banner from './banner';
import Footer from './footer';
import About from './section/aboutus';

class Landing extends React.PureComponent {
    render () {
        return (
            [
                <Header/>,
                <Banner/>,
                <About/>,
                <Footer/>
            ]
        );
    }
}

export default Landing;