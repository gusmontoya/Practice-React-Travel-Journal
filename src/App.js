import React from 'react';
import './style.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

export default function App() {
  const cards =data.map(item => {
    return (
      <Card
        Key={item.id}
        {...item}
      />
    )
  })

  return (
    <main>
      <Navbar />
      <div className="Journal_body">
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </main>
  )
}

