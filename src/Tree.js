import React from 'react';

const Tree = (props) => {
  const liStyle = { 
    textAlign: 'left'
  };
  // console.log('[Tree.js] ', props.data)
  const data = props.data;
  if (!data) return null;
  return (
    <ul>
      {data.map((item) => {
        return (
          <li 
            style={liStyle}
            key={item.id}>
            {item.data.id}
              <button onClick={() => props.clicked(item.data.id)}> Add</button>
              <Tree {...props}
                data={item.children}
               />
          </li>
        )
      })}
    </ul>
  )
}
 
export default Tree;