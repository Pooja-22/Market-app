import React from 'react';
import {connect} from 'react-redux';

import MarketPage from './MarketPage';

class App extends React.Component {
    constructor() {
        super();
    }
    
    render () {
        return (
            <div>
                <MarketPage />
            </div>
        )
    }
}

export default connect()(App)