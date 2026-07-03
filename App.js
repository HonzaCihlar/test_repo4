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
=======
  return 2
=======
  return 1
}

function jarda2() {
  return 1
>>>>>>> f83b8e7 (Added a new function)
>>>>>>> 5703b3d (Added a new function)
}