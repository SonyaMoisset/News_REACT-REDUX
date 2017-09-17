import React from 'react'
import { Link } from 'react-router-dom'

const showLatest = ({latest}) => {
    if (latest) {
        return latest.map((article) => {
            return (
                <Link
                    key={article.id}
                    to={`/news/${article.id}`}
                    className="article">
                    <div
                        className="image-cover"
                        style={{ background: `url(/images/articles/${article.img})` }}>
                        <div className="description">
                            <span>{article.category}</span>
                            <div>{article.title}</div>
                        </div>
                    </div>
                </Link>
            )
        })
    }
}

const Latest = (props) => {
    return (
        <div className="home-latest">
            {showLatest(props)}    
        </div>
    )
}

export default Latest