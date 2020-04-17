import React from 'react'
import { connect } from 'react-redux'

import { loadData, startClock, tickClock } from '../redux/tickers/actions'
import Page2 from '../components/page'
import Page from "../hocs/defaultPage";

class Two extends React.Component {
    static async getInitialProps(props) {
        const { store, isServer } = props.ctx
        store.dispatch(tickClock(isServer))

        if (!store.getState().placeholderData) {
            store.dispatch(loadData())
        }

        return { isServer }
    }

    componentDidMount() {
        this.props.dispatch(startClock())
    }

    render() {
        return <Page2 title="Index Page" linkTo="/" NavigateTo="Other Page" />
    }
}

// export default connect()(Page(Two))

export default connect()(Two)