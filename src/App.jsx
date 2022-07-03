import './App.scss';
import Header from './components/Header/Header'
import Contacts from './components/Contacts/Contacts'
import foto from "./assets/foto.jpg"

function App() {
  return (
   <div className='layout'>
     <img className='img' src={foto} alt='blue dinner' />
      <Header />
      <Contacts />
   </div>
  );
}

export default App;
