import CreditCard from './components/CreditCard';
import CardProvider from './context/CardContext';

export default function App() {
  return (
    <>
      <a href="https://developers.bluesnap.com/docs/test-credit-cards">
        Test Card Numbers
      </a>
      <CardProvider>
        <CreditCard />
      </CardProvider>
    </>
  );
}
