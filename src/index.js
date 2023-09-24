import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const mochiData = [
  {
    name: 'Strawberry Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh strawberry',
    price: 5,
    image: 'mochi/Mochi ichigo.png',
    soldOut: false,
    inStock: 30,
  },
  {
    name: 'Kiwi Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh kiwi',
    price: 6,
    image: 'mochi/Mochi kiwi.jpg',
    soldOut: false,
    inStock: 25,
  },
  {
    name: 'Grape Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh green grape',
    price: 7,
    image: 'mochi/Mochi grape.jpg',
    soldOut: false,
    inStock: 15,
  },
  {
    name: 'Mango Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh mango and cream',
    price: 7,
    image: 'mochi/Mochi mango.jpg',
    soldOut: false,
    inStock: 17,
  },
  {
    name: 'Orange Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh orange',
    price: 5,
    image: 'mochi/Mochi orange.jpg',
    soldOut: false,
    inStock: 28,
  },
  {
    name: 'Peach Daifuku Mochi',
    ingredients: 'Soft mochi rice dough with fresh peach',
    price: 8,
    image: 'mochi/Mochi peach.jpg',
    soldOut: false,
    inStock: 10,
  },

]

function App() {
  return (
    <div className='container'>
    <Header />
    <Menu />
    <Footer />

  </div>
  )
  
}

function Header() {
return (
  <header className='header'>
  <h1>Daifuku Mochi Shop</h1>

  </header>
)
}

function Menu() {
  const allMochi = mochiData;
  const mochiNum = allMochi.length;

  
return (
  <main className='menu-container'>
    <h2> OUR MENU</h2>

    {mochiNum > 0 && (
      <>
        <p>Daifuku mochi is a petite masterpiece of Japanese confectionery. A delicate, chewy rice cake enfolds a hidden treasure of sweet fillings, creating a perfect balance of textures and flavors. Its simplicity belies its captivating charm, making each bite a delightful journey into the heart of Japanese culinary artistry.</p>

        <ul className='allMochi-container'>
          {allMochi.map(mochi => (
            <Mochi mochiObj={mochi} key={mochi.index} />
          ))}
        </ul>
      </>
    )}
  </main>
)
}

function Mochi({mochiObj}) {
return (
  <li className='mochi-container'>
<img src={mochiObj.image} alt={mochiObj.name} />
<div className='mochi-details-box'>
  <h3>{mochiObj.name}</h3>
  <p>{mochiObj.ingredients}</p>
  <p>Produce: {mochiObj.inStock} mochi</p>
  <p id='mochi-price'>{mochiObj.soldOut ? 'SOLD OUT' : `$${mochiObj.price} per one`}</p>
</div>
  </li>
)
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;


  return (
    <footer>
    {isOpen ? (
      <Order openHour={openHour} closeHour={closeHour} />
    ) : <p>We're happy to welcome you  between {openHour}:00 and {closeHour}:00 </p>}

      
    </footer>


  )
}

function Order({closeHour, openHour}) {
return (
  <div>
  <p>We're are open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
  <button>Order</button>
  </div>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


