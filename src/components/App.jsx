import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles'
import Logo from './Logo'
import ItemGrid from './ItemGrid'
import Cart from './Cart'

export default () => {
  return (
    <Grid>
      <GlobalStyles />
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <Cart />
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 75vw 25vw;
  grid-template-rows: auto;
  grid-template-areas:
    'header cart'
    'main cart';
`

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`