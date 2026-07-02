import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

function jarda() {
<<<<<<< HEAD
<<<<<<< HEAD
  return 1
<<<<<<< HEAD
}

function jarda2() {
  return 2
=======
=======
  return 2
>>>>>>> 8da9693 (Vetev 2 file)
>>>>>>> 86bc3d3 (Vetev 2 file)
=======
  return 2
>>>>>>> 2582bfc (Resolve conflict in App.js)
}