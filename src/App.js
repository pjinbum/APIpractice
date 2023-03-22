import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import { Routes , Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Nav from './component/Nav';

//1.wjscptkdvna(ProductAll),로그인,상세페이지(ProductDetail)
//2.로그인 전에 상세페이지 접속시 , 로그인 페이지를 먼저 보여준다.
//3.로그인이 이미 되어있다면 , 상세페이지 보여준다.
//4.로그인하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
  
      </Routes>
    </div>
  );
}

export default App;
