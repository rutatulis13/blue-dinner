import './App.scss';
import Header from './components/Header/Header'
import Contacts from './components/Contacts/Contacts'
import foto from "./assets/foto.jpg"
import FooterMobile from './components/FooterMobile/FooterMobile';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

function App() {
  return (
    <>
   <div className='layout'>
     {/* <img className='img' src={foto} alt='blue dinner' /> */}
      <Header />
      <Contacts />
   </div>
    <div className='mobile'>
      <img className='img' src={foto} alt='blue dinner' />
      <HeaderMobile />
      <FooterMobile />
  </div>
  </>
  );
}

export default App;
