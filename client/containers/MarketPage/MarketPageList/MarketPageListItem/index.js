import React from 'react';

import styles from '../../styles';

class MarketPageListItem extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div style={styles.listHeader}>
                <span>{data.coin}</span>
                <span>{data.price}</span>
                <span>{data.volume}</span>
                <span>{data.change}</span>
            </div>
        )
    }
}

export default MarketPageListItem;