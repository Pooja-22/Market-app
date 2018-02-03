import React from 'react';

import MarketPageListItem from './MarketPageListItem';
import styles from '../styles';

class MarketPageList extends React.Component {

    render() {
        const arry = [{coin: 1, price: 1, volume: 1, change: 1}];
        return (
            <div style={styles.list}>
                <div style={styles.listHeader}>
                    <span>Coin</span>
                    <span>Price</span>
                    <span>Volume</span>
                    <span>Change</span>
                </div>
                {arry.map(item => (<MarketPageListItem data={item} />))}
            </div>
        )
    }
}

export default MarketPageList;