import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import ItemGrid from './ItemGrid'
import GlobalStyles from './GlobalStyles'
import Cart from './Cart'

const App = () => {
  return (
    <MainWrapper>
      <ShopWrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
        <GlobalStyles />
      </ShopWrapper>
      <Cart />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  width: 75vw;
`

const ShopWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Header = styled.header`
  padding: 32px 64px;
`

const ItemGridWrapper = styled.main`
  padding: 16px 64px;
`

export default App
