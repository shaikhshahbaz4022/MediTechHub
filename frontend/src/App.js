import { ToastContainer } from 'react-toastify';
import './App.css';
import Routing from './router/routes';

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routing />
    </div>
  )
}

export default App;
