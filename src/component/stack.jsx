import React from 'react'
import { StackQueue, Image } from '../styled-component/styled-component'
const Stack = () => {
  return (
    <div>
      <StackQueue justifyContent='space-between' direction='row'>
        <div className="">
          hello
        </div>
        <div className="">
          my name is
        </div>
        <div className="">
          my name is
        </div>
      </StackQueue>
    </div>
  )
}

export default Stack