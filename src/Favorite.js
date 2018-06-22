import React from 'react';

const favorite = (props) => {
  return (
    <span onClick={() => props.clicked(props.name)}> {props.name} -</span>
  )
}
 
export default favorite;