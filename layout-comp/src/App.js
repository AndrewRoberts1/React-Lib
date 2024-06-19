import './App.css';
import { Modal } from './Modal';
import { NumberedList } from './NumberedList';
import { RegList } from './RegList';
import { SplitScreen } from './SplitScreen';
import { people } from './data';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';

//Only used in the split screen demo
// const LeftComp = ({ name }) => {
//   return <h1> This name is {name}!</h1>
// };
// const RightComp = ({ message }) => {
//   return <h1> {message}</h1>
// }

function App() {
  return (
    <>
      <SplitScreen leftWeight={2} rightWeight={3} >
        {/* <LeftComp name={'Tom'}/>
        <RightComp message={'hi'}/> */}
        <RegList 
          items={people}
          resourceName='person'
          itemComp={LargePersonListItem}
        />
        <NumberedList 
          items={people}
          resourceName='person'
          itemComp={SmallPersonListItem}
        />
      </SplitScreen>
      <Modal>
        <LargePersonListItem person={people[0]}></LargePersonListItem>
      </Modal>
    </>
   
  );
}

export default App;
