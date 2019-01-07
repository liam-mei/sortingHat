import React from 'react'

export default (props) => {
  return (
      <div>{props.house && `You are a ${props.house}`}</div>
  )
}
