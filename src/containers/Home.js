import React, { Component } from 'react'
import { connect } from 'react-redux'
import { latestNews, otherNews } from '../actions/news_actions'
import { latestGallery } from '../actions/gallery_actions'
import { bindActionCreators } from 'redux'

import { Gallery, LatestNews, OtherNews } from '../components'

class Home extends Component {

    componentDidMount() {
        this.props.latestNews()
        this.props.otherNews()
        this.props.latestGallery()
    }

    render() {
        return (
            <div>
                <LatestNews latestNews={this.props.articles.latestNews} />
                <OtherNews otherNews={this.props.articles.otherNews} />
                <Gallery latestGallery={this.props.gallery.latestGallery} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)