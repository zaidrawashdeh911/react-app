// // import ListGroup from './components/ListGroup';

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

import Like from "./components/Like";

const App= ()=>{

  return (
    <div>
      <Like onClick={()=>console.log("clicked")}/>
    </div>
  );
}

export default App;