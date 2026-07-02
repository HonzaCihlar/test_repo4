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
  return 1
=======
  return 2
>>>>>>> 8da9693 (Vetev 2 file)
}