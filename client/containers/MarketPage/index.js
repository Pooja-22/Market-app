import React from 'react';
import { connect } from 'react-redux';
import * as TradeAction from '../../actions/action';
import MarketPageHeader from './MarketPageHeader';
import MarketPageList from './MarketPageList';
import styles from './styles';

class MarketPage extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <div style={styles.body}>
                <MarketPageHeader setType={this.props.getData} />
                <MarketPageList data={data} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.market.market_data,
    });
}

const mapDispatchToProps = (dispatch) => ({
    getData: (type) => {
        dispatch(TradeAction.getMarketData(type));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);