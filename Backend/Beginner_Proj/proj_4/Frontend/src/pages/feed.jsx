import React, { useState } from 'react'

const feed = () => {

    const [posts, setposts] = useState([

        {
            _id: '1',
            Image:'https://ik.imagekit.io/uh4e90ciq/image_Q1xDrpt5V.jpg?updatedAt=1770096647212',
            caption:'Beautiful Scenery',
        },

    ])
  return (
    <section className="feed-section">
    {
        posts.length > 0 ? (
            posts.map((post) =>(
                <div key={post._id} className="post-card">
                    <img src={post.Image} alt={post.caption} className="post-image" />
                    <p className="post-caption">{post.caption}</p>
                </div>
            ))
        ) : (
            <h2>No posts available</h2>
        )
    }
    </section>
  )
}

export default feed