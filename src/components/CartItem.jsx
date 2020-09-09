import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { removeItem, updateItem } from '../actions'

export default ({ item }) => {
  const { id, title, quantity } = item

  const dispatch = useDispatch()

  const handleDelete = (id) => dispatch(removeItem(id))

  const handleChange = (e) => {
    const newItem = { ...item, quantity: e.target.value }
    dispatch(updateItem(id, newItem))
  }

  return (
    <Wrapper>
      <Row>
        <ItemTitle>{title}</ItemTitle>
        <DeleteBtn onClick={() => handleDelete(id)}>X</DeleteBtn>
      </Row>
      <QtyRow>
        Quantity:
        <QtyInput type="text" value={quantity} onChange={handleChange} />
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

const QtyInput = styled.input`
  width: 40px;
  padding: 4px;
  margin-left: 5px;
  text-align: center;
`
