import logo from './logo.svg';
import './App.css';
import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import { withUser } from './withUser';

//Create new component that will display User info within printProps
const UserInfoWrapped = printProps(UserInfo)

const UserInfoWithLoader = withUser(UserInfo, 2);

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b={'helloooo'} c={{name: 'tom'}}/>
      <UserInfoWithLoader />
    </>
  );
}

export default App;
