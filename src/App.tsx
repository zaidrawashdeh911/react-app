// // import ListGroup from './components/ListGroup';

import { useState } from 'react';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form';

// import { useState } from 'react';
// import Message from './components/Message';
// import { AiTwotoneHourglass } from 'react-icons/ai';
// import Navbar from './components/Navbar';
// import Cart from './components/Cart';

// import { useState } from 'react';
// import Alert from './components/Alert';
// import Button from './components/Button';

// function App() {
//   // let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

//   // const handleSelectItem = (item: string) => {
//   //   console.log(item);
//   // };
//   // return (
//   //   <div>
//   //     <ListGroup
//   //       items={items}
//   //       heading="Cities"
//   //       onSelectItem={handleSelectItem}
//   //     />
//   //   </div>
//   // );

//   // return (
//   //   <div>
//   //     <Alert>
//   //       Hello <span>World</span>
//   //     </Alert>
//   //   </div>
//   // );

//   const [alertVisible, setAlerVisibility] = useState<boolean>(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlerVisibility(false)}>My Alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlerVisibility(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// import ListGroup from "./components/ListGroup";

// const App = ()=>{
//   const items = ["NY", "LA","SF"];

//   return (
//     <div>
//       <ListGroup heading="Miami" items={items} onSelectItem={()=>{}}/>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// import Icon from "./components/Icons";

// const App= ()=>{

//   return (
//     <div>
//       <Icon/>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// import Like from "./components/Like";

// const App= ()=>{

//   return (
//     <div>
//       <Like onClick={()=>console.log("clicked")}/>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// const App=()=>{

//   return(
//     <div>
//       <Message/>
//       {/* <Message/>
//       <Message/> */}
//     </div>
//   );
// }
// export default App;

/******************************************************************************************************************/

// function App(){
//   const [drink, setDrink]= useState({
//     title:"Americano",
//     price:5,
//   });

//   const handleClick=()=>{
//     // const newDrink = {
//     //   //title: drink.title,
//     //   //spread operator, to spread the existing drink object instead of writing them one by one
//     //   ...drink,
//     //   price:6,
//     // }
//     // setDrink(newDrink)
//     //or you can do this shortcut
//     setDrink({...drink, price:6});
//   }

//   return(
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// Updating nested objects

// function App(){
//   const [customer, setCustomer]= useState({
//     name :'John',
//     address: {
//       city: 'San Francisco',
//       zipCode: 94111
//     }
//   });

//   const handleClick=()=>{
//     setCustomer({...customer, address:{...customer.address, zipCode: 11817} })
//   }

//   return(
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

//Updating Arrays

// function App(){
//   const [tags,setTags] = useState(['happy','cheerful']);

//   const handleClick=()=>{
//     //Add to an array
//     setTags([...tags, 'exciting']);

//     //Remove from an array
//     setTags(tags.filter(tag => tag !== 'happy'));

//     //Update an array
//     setTags(tags.map(tag => tag === 'happy'? 'happiness': tag));
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default App;

/******************************************************************************************************************/

//Updating Array of Objects

// function App(){

//   const [bugs,setBugs] = useState([
//     {id:1, title:'Bug 1', fixed: false},
//     {id:2, title:'Bug 2', fixed: false}
//   ]);

//   const handleClick=()=>{
//     setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug));
//     console.log(bugs);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>

//     </div>
//   )
// }

// export default App;

/******************************************************************************************************************/

//Simplifying Update Logic with Immer

// import produce from 'immer';

// function App(){

//   const [bugs,setBugs] = useState([
//     {id:1, title:'Bug 1', fixed: false},
//     {id:2, title:'Bug 2', fixed: false}
//   ]);

//   const handleClick=()=>{
//     //setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug));

//     setBugs(produce(draft => {
//       const bug = draft.find(bug=> bug.id ===1);
//       if(bug) bug.fixed = true;
//     }))
//   };

//   return (
//     <div>
//       {bugs.map(bug=> <p key={bug.id}>{bug.title} {bug.fixed? 'Fixed':'New'}</p>)}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default App;

/******************************************************************************************************************/

//Sharing state between Components

// function App(){
//   const [cartItems, setCartItems]= useState(['Product1','Product2']);

//   return (
//     <div>
//       <Navbar cartItemsCount={cartItems.length}/>
//       <Cart cartItems={cartItems} onClear={()=> setCartItems([])}/>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

//Exercise 1

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: 'John',
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: 'Bob' } });
//     console.log(game);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

//Exercise 2

// function App() {
//   const [cart, setcart] = useState({
//     name: 'Spicy Pepperoni',
//     toppings: ['Mushroom'],
//   });

//   const handleClick = () => {
//     setcart({ ...cart, toppings: [...cart.toppings, 'Pepperoni'] });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

// Exercise 3

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: 'Product 1', quantity: 1 },
//       { id: 2, title: 'Product 2', quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

//Exercise 3

// function App() {
//    return (
//     <div>
//       {/* <ExpandableText maxChars={100}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse
//         beatae eos voluptas dolorem, animi necessitatibus ad eaque maiores
//         temporibus quas aliquid eveniet eum quos, alias ab, id dolorum
//         architecto quia labore laborum error. Sequi, labore. Perferendis aliquid
//         explicabo veritatis laboriosam dignissimos officiis aperiam blanditiis
//         quam libero, doloribus, aliquam facilis ea rerum recusandae eius, illum
//         ducimus omnis quasi delectus impedit quo voluptatem porro dolores
//         architecto. Atque saepe, blanditiis accusamus reprehenderit tenetur
//         architecto, libero beatae fugiat natus quis excepturi, laboriosam
//         consectetur! Ut itaque vel aspernatur dolores doloremque corporis dicta,
//         recusandae sunt tempore reprehenderit labore! Itaque ex nihil sapiente
//         exercitationem nobis. Adipisci.
//       </ExpandableText> */}
//       <ExpandableText>Hello World!</ExpandableText>
//     </div>
//   );
// }

// export default App;

/******************************************************************************************************************/

import './components/index.css';
function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
