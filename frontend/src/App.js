import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='py-4'>
        <Container>
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
