import { Fragment } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virtual' />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
