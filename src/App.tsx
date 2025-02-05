import AppRoutes from 'components/AppRoutes/AppRoutes';
import Layout from 'components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <AppRoutes />
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
