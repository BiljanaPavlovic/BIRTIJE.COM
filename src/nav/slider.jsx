import React from 'react'
import Carousel from 'react-bootstrap/Carousel'




export default function Slider() {
    return (
        <div>
          
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 slajder-img"
      src="/img/slajder/slajder1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Koje kafane su najbolje u gradu?</h3>
      <p>Pogledajte koje kafane je odabrao nas ziri.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slajder-img"
      src="/img/slajder/slajder2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Kafane kroz istoriju</h3>
      <p>Saznajte nesto o duhu Beograda kroz price o njegovim kafanama.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slajder-img"
      src="/img/slajder/slajder3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Najbolji ziri</h3>
      <p>Upoznajte se sa strucnim zirijem koji ocenjuje kafane.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slajder-img"
      src="/img/slajder/slajder4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Citati o kafanama</h3>
      <p>Pogledajte sta su velike istorijske licnosti govorile o kafanama.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slajder-img"
      src="/img/slajder/slajder5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ostavite i svoj komentar</h3>
      <p>Zanima nas da li ste vi posetili neku od ovih kafana i sta mislite o njima.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
