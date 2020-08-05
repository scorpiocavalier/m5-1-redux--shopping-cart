import React from 'react'
import styled from 'styled-components'

export default () => {
  const numItems = 0
  const _numCartItems_ = `${numItems} ${numItems > 1 ? 'Items' : 'Item'}`
  const cartTotal = 12.34
  const _totalLabel_ = `Total: `
  const _cartTotal_ = `$${cartTotal}`

  return (
    <CartWrapper>
      <HeadingWrapper>
        <CartTitle>Your Cart</CartTitle>
        <ItemCount>{_numCartItems_}</ItemCount>
      </HeadingWrapper>
      <CartItemsList>
        {/* map through all cartItems from store state */}
      </CartItemsList>
      <TotalWrapper>
        <Total>
          {_totalLabel_}<Bold>{_cartTotal_}</Bold>
        </Total>
        <PurchaseBtn>
          <Bold>Purchase</Bold>
        </PurchaseBtn>
      </TotalWrapper>
    </CartWrapper>
  )
}

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

const CartWrapper = styled(ColWrapper)`
  position: fixed;
  right: 0;
  width: 25vw;
  height: 100vh;
  padding: 30px 20px;
  color: white;
  background: #401f43;
  border-left: 3px dashed #ff406e;
`

const HeadingWrapper = styled(ColWrapper)`
  height: 10%;
`

const CartTitle = styled.span`
  font-size: 24px;
  margin-bottom: 5px;
`

const ItemCount = styled.span`
  font-size: 14px;
`

const CartItemsList = styled(ColWrapper)`
  height: 80%;
`

const TotalWrapper = styled(RowWrapper)`
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
