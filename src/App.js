import './styles/global.css'
import './styles/App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data/Data.js'

function App() {

  const cards = data.map(obj =>{

    return(
      <Card
      key={obj.id}
      title={obj.title}
      price={obj.price}
      img={obj.coverImg}
      rating={obj.stats.rating}
      reviewCount={obj.stats.reviewCount}
      location={obj.location}
      openSpots={obj.openSpots}/>
    )
  })

  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="card-list">
    {cards}
    </div>
    </div>
  );
}

export default App;
