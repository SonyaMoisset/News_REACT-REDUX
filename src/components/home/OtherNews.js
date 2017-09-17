import React from 'react'
import { Link } from 'react-router-dom'

const showOther = ({otherNews}) => {
    if (otherNews) {
        return otherNews.map((news) => {
            return (
                <Link
                    key={news.id}
                    to={`/news/${news.id}`}
                    className="news">
                    <div
                        className="left"
                        style={{ background: `url(/images/articles/${news.img})` }}>
                    </div>
                    <div className="right">
                        <h3>{news.title}</h3>
                        <div className="category-tag">{news.category}</div>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {news.views}
                            </span> 
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {news.likes[0]}
                            </span> 
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const OtherNews = (props) => {
    return (
        <div className="other-news">
            <h2>Other News</h2>
            <div className="other-news-items">
                {showOther(props)}    
            </div>
        </div>
    )
}

export default OtherNews