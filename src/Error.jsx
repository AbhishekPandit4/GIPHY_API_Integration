import React from 'react'

export default function Error(props) {
    if(!props.isErr){
        return null
    }
  return (
    <div>
        <p >{props.text}</p>
    </div>
  )
}
