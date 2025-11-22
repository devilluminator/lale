import React from 'react'
type TransitionIndicatorProps={
    current_silde: number,
    slides:number
}
function TransitionIndicator(props:TransitionIndicatorProps) {
  return (
    <div>{
        props.current_silde
      }</div>
  )
}

export default TransitionIndicator