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
  <header>
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
  <li>
<img src={mochiObj.image} alt={mochiObj.name} />
<div>
  <h3>{mochiObj.name}</h3>
  <p>{mochiObj.ingredients}</p>
  <p>{mochiObj.inStock} mochi</p>
  <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
  </select>
  <p>{mochiObj.soldOut ? 'SOLD OUT' : `$${mochiObj.price} per one`}</p>
</div>
  </li>
)
}

function Footer() {

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


