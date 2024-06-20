import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const getServerData = url => async ()=> {
  const response = await axios.get(url);
  return response.data;
  };

const getLocalData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    // <CurrentUserLoader>
    //   <UserInfo />
    // </CurrentUserLoader>
  // <>
  //   <UserLoader userId={'2'}>
  //     <UserInfo />
  //   </UserLoader>
  //   <UserLoader userId={'3'}>
  //     <UserInfo />
  //   </UserLoader>
  // </>
  // <>
  //   <ResourceLoader resourceName={'user'} resourceUrl={'/user/3'}>
  //     <UserInfo />
  //   </ResourceLoader>
  //   {/* <ResourceLoader resourceName={'product'} resourceUrl={'/product/3'}>
  //     <ProductInfo />
  //   </ResourceLoader> */}

  // </>

  <>
  {/* Use data source with server get */}
    <DataSource getDataFunc={getServerData('/user/1')}
      resourceName={'user'}>
        <UserInfo/>
    </DataSource>
  {/* Use data source with localStorage */}
    <DataSource getDataFunc={getLocalData('message')}
      resourceName={'message'}>
        <Text/>
    </DataSource>
  </>


  );
}

export default App;
