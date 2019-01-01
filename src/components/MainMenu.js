import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/files">
        <div>Files</div>
      </Link>
      <Link to="/clients">
        <div>Clients</div>
      </Link>
      <Link to="/playlists">
        <div>Playlists</div>
      </Link>
    </div>
  )
}
