import { useState } from 'react';
//{items:[], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // const message = items.length === 0 ? <p>No Items Found</p> : null

  // const getMessage = ()=>{
  //   items.length === 0 ? <p>No Items Found</p> : null
  // }

  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  // const [name,setName]=useState('');
  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
