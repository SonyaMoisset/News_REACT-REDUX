import React, { Component } from 'react'
import { connect } from 'react-redux'
import { latestNews } from '../actions'
import { bindActionCreators } from 'redux'

import LatestNews from '../components/home/Latest'

class Home extends Component {
    render() {
        return (
            <div>
                <LatestNews />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ latestNews }, dispatch)
}

export default connect(mapStateToProps, null)(Home)