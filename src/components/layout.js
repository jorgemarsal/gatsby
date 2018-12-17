import React from 'react'
import { Link } from 'gatsby'
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default class Layout extends React.Component {
  componentDidMount() {
    if (typeof twttr.widgets !== 'undefined') {
      twttr.widgets.load()
    }
  }

  render() {
    const { children } = this.props

    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 650,
          padding: `1.25rem 1rem`,
        }}
      >
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 className="title" style={{ display: `inline` }}>Jorge Martinez</h1>
          </Link>

          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>

          <div />
          <div style={{ marginTop: '10px' }}>
            <a
              style={{ display: 'inline' }}
              className="twitter-follow-button"
              href="https://twitter.com/jorgemarsal"
              data-show-count="false"
              data-size="large"
            >
              Follow @jorgemarsal
            </a>
          </div>
        </header>
        {children}
      </div>
    )
  }
}
