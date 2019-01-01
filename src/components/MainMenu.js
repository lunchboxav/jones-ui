import React from 'react'
import {Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { Link as RebassLink } from 'rebass'

/*const StyledLink = props => 
  <Link
    {...props}
    p={3}
    css={{
      textDecoration: 'none',
      fontWeight: '700'
    }}
  /> */

/*const StyledLink = styled(Box)({
})

StyledLink.defaultProps = {
  p: 3,
  fontWeight: 'bold',
  color: '#056700',
  textDecoration: 'none'
}*/

const StyledLink = styled(RebassLink)({
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'block',
  textAlign: 'left'
}) 

StyledLink.defaultProps = {
  p: 2,
  px: 3,
  color: '#056700',
  as: RouterLink
}

/*
const StyledLink = props =>
  <RebassLink
    {...props}
    css={{
      display: 'block',
      textDecoration: 'none',
      color: 'green'
    }}
    as={RouterLink}
  />
*/

export default () => {
  return (
    <div>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/files'>Files</StyledLink>
      <StyledLink to='/clients'>Clients</StyledLink>
      <StyledLink to='/playlists'>Playlists</StyledLink>
    </div>
  )
}
