import React from 'react';
import Header from './header';
import Banner from './banner';

class Landing extends React.PureComponent {
    render () {
        return (
            [
                <Header/>,
                <Banner/>
            ]
        );
    }
}

export default Landing;