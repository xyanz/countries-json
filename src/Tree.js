import React from 'react';

const Tree = (props) => {
  const liStyle = { 
    textAlign: 'left'
  };
  const data = props.data;
  if (!data) return null;
  if (props.query !== null) {
    console.log("query mapping ", props.query)
    return (
      <ul>
        {data.map((item) => {
          if (item.data.id.includes(props.query)){
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
          }
        })}
      </ul>
    )
  } else {
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
}
 
export default Tree;