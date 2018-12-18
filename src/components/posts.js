import React from 'react'

import { Link } from 'gatsby'

const Posts = ({ posts }) => (
  <div>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div
          style={{
            marginTop: '64px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow:
              'inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1)',
          }}
          key={node.fields.slug}
        >
          {(node.frontmatter.tags || []).map((tag, i) => (
            <Link key={tag} className="tag" to={`/tags/${tag}/`}>
              {tag}
            </Link>
          ))}

          <h3 className="article-title">
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <p className="article-subtitle">
            Jorge Martinez on {node.frontmatter.date}
          </p>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link className="animatedHover" to={node.fields.slug}>
            Read more ...
          </Link>
        </div>
      )
    })}
  </div>
)

export default Posts
