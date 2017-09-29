import React from 'react'
import { Link } from 'react-router-dom'

const showLatestNews = ({ latestNews }) => {
    if (latestNews) {
        return latestNews.map(news => {
            return (
                <Link
                    key={news.id}
                    to={`/news/${news.id}`}
                    className="article">
                    <div
                        className="image-cover"
                        style={{ background: `url(/images/articles/${news.img})` }}>
                        <div className="description">
                            <span>{news.category}</span>
                            <div>{news.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const LatestNews = props => (
    <div className="home-latest">
        {showLatestNews(props)}
    </div>
)

export default LatestNews