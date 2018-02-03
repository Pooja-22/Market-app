import React from 'react';

import styles from '../styles';

class MarketPageHeader extends React.Component {
    render() {
        const { setType } = this.props;
        return (
            <div style={styles.header}>
                Markets
                <div>
                    <span
                        style={styles.headerTabs}
                        onClick={() => { setType('btc'); }}
                    >
                        BTC
                    </span>
                    <span
                        style={styles.headerTabs}
                        onClick={() => { setType('eth'); }}
                    >
                        ETH
                    </span>
                    <span
                        style={styles.headerTabs}
                        onClick={() => { setType('usdt'); }}
                    >
                        USDT
                    </span>
                </div>
            </div>
        )
    }
}

export default MarketPageHeader;