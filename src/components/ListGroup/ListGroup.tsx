import { useState } from 'react';
import './ListGroup.css';
import styled from 'styled-components';

const List= styled.ul`
   list-style: none;
    padding: 0px;
`;

interface ListItemProps{
  active: Boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => props.active ? 'blue': 'aquamarine'}
`;

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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // const [name,setName]=useState('');
  return (
    <>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join(' ')}> */}
      <List>
        {items.map((item, index) => (
          // <li
          <ListItem
            // className={
            //   selectedIndex === index
            //     ? 'list-group-item active'
            //     : 'list-group-item'
            // }
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
            </ListItem>
          // </li>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
