// import ListGroup from './components/ListGroup';

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  // let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Alert>
  //       Hello <span>World</span>
  //     </Alert>
  //   </div>
  // );

  const [alertVisible, setAlerVisibility] = useState<boolean>(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlerVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlerVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
