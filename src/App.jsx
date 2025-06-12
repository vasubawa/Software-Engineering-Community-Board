import Header from './components/Header';
import Card from './components/Card';
import eventsData from './data/events';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        {eventsData.map(event => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;
