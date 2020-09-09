import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getStoreItemArray } from '../reducers'

export default () => {
  const storeItems = useSelector(getStoreItemArray)
  const [cartTotal, setCartTotal] = useState(0)

  console.log('storeItems', storeItems)
  console.log('cartTotal', cartTotal)

  const numCartItems = `${storeItems.length} ${
    storeItems.length > 1 ? 'Items' : 'Item'
  }`

  useEffect(() => {
    const sum = storeItems.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    )
    setCartTotal(sum / 100)
  }, [storeItems])

  return (
    <Grid>
      <Header>
        <CartTitle>Your Cart</CartTitle>
        <ItemCount>{numCartItems}</ItemCount>
      </Header>

      <Main>
        {storeItems.map((item, index) => {
          return <CartItem key={index} item={item} />
        })}
      </Main>

      <Footer>
        <Total>
          {`Total: `}
          <Bold>${cartTotal}</Bold>
        </Total>
        <PurchaseBtn>
          <Bold>Purchase</Bold>
        </PurchaseBtn>
      </Footer>
    </Grid>
  )
}

// HELPERS -------------------------
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Bold = styled.span`
  font-weight: 600;
`

// GRID ----------------------------
const Grid = styled.div`
  display: grid;
  grid: 1fr 8fr 1fr / 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 30px 20px;
  color: white;
  background: #401f43;
  border-left: 3px dashed #ff406e;
`

// HEADER --------------------------
const Header = styled(ColWrapper)`
  grid-area: header;
  height: 10%;
`

const CartTitle = styled.span`
  font-size: 24px;
  margin-bottom: 5px;
`

const ItemCount = styled.span`
  font-size: 14px;
`

// MAIN ----------------------------
const Main = styled(ColWrapper)`
  grid-area: main;
  height: 80%;
`

// FOOTER --------------------------
const Footer = styled(RowWrapper)`
  grid-area: footer;
  height: 10%;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
`

const Total = styled.span``

const PurchaseBtn = styled.button`
  background: #ff406e;
  color: white;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 10px;
`
