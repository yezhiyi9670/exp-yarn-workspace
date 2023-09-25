import React from 'react'
import { getDateString } from '@yarn-workspace/core'

export function Hello(props: {
  name: string
}) {
  return <>
    <h1>Hello, {props.name}!</h1>

    <p>{getDateString()}</p>
  </>
}
