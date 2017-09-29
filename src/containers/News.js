import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedNews, clearSelectedNews } from '../actions/news_actions'
import { bindActionCreators } from 'redux'

import Counter from './LikesCounter'

class News extends Component {

    componentDidMount() {
        this.props.selectedNews(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearSelectedNews()
    }

    renderNews = ({ selected }) => {
        if (selected) {
            return selected.map(news => {
                return (
                    <div key={news.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {news.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {news.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {news.likes[1]}
                            </span>  
                        </div>

                        <div className="top">
                            <h2>{news.title}</h2> 
                            <span>Article by: <strong>{news.author}</strong></span>
                        </div>

                        <img alt={news.title} src={`/images/articles/${news.img}`} />

                        <div className="body-news">
                            {news.body}    
                        </div>

                        <div>
                            <Counter
                                articleId={news.id}
                                type="HANDLE_LIKES_ARTICLE"
                                section="articles"
                                likes={news.likes[0]}
                                dislikes={news.likes[1]}/>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="news-container">
                {this.renderNews(this.props.articles)}    
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(News)