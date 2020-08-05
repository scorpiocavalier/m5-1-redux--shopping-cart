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
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
`

const ShopWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`

const CartWrapper = styled.div`
  grid-area: sidebar;
  width: 35vw;
  border-left: 3px dashed #ff406e;
`

export default App
