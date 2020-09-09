import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { removeItem } from '../actions'

export default ({ item: { id, title, quantity } }) => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Row>
        <ItemTitle>{title}</ItemTitle>
        <DeleteBtn onClick={() => dispatch(removeItem(id))}>X</DeleteBtn>
      </Row>
      <QtyRow>
        Quantity:<Qty>{quantity}</Qty>
      </QtyRow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 2px dashed #4e3050;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const ItemTitle = styled.span`
  font-size: 18px;
`

const DeleteBtn = styled.button`
  background: transparent;
  color: white;
  font-size: 18px;
`

const QtyRow = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  background: #301732;
  font-size: 14px;
`

const Qty = styled.span`
  background: white;
  color: #301732;
  padding: 4px 8px;
  margin-left: 5px;
  font-weight: 600;
`
