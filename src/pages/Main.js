import Filters from '../components/Filters';
import Cards from '../components/Cards';
import '../scss/Main/main.css';

function Main() {
  return (
    <main className="main">
      <Filters />
      <Cards />
    </main>
  );
};

export default Main;