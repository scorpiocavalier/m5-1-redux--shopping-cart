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

      <Main>
        <ItemGrid />
      </Main>

      <Sidebar>
        <Cart />
      </Sidebar>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid: auto / 3fr minmax(350px, 1fr);
  grid-template-areas:
    'header sidebar'
    'main sidebar';
`

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`

const Main = styled.main`
  grid-area: main;
  padding: 16px 64px;
`

const Sidebar = styled.div`
  grid-area: sidebar;
`
