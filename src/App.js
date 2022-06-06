import './App.css';
import Navbar from './components/navbar/Navbar';
import Elements from './components/elements/Elements';

function App({
  children,
  className,
  ...props

}) {
  return (
    <>
      <Navbar h5="Glasses" />
      <Navbar
        children={children}
        h5="Distance"

      />
      <Elements />
      <Navbar h5="PC" />



    </>
  );
}

export default App;
