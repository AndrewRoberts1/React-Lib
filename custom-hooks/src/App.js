import './App.css';
import { ProductInfo } from './ProductInfo';
import { UserInfo } from './UserInfo';

function App() {
  return (
    <>
      <UserInfo userId={1}/>
      <UserInfo userId={3}/>
      <ProductInfo productId={1}/>
    </>
  );
}

export default App;
