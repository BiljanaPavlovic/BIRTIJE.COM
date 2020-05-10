import React, {useState} from 'react';
import Quotes2 from './Quotes2';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Quotes() {
    const [index,setIndex] = useState(0) 
    const quotes = [
        'Nije bitno u kojoj kafani sediš, već ko sedi za tvojim stolom.',
        'U kafani ako te ne pogodi pesma, flaša sigurno hoće.',
        'Ako piješ da je zaboraviš, ne zaboravi da plaiš šta si popio.',
        'Onaj ko te voli uvek je tu uz tebe, na primer kafana je uvek tu za nas.',
        'Nova godina je za amatere, za one koji nikada ne otaju posle ponoći u kafanama.',
        'Za razliku od operacionog stola, postoji i onaj drugi, kafanski. Za njim su se ljudi češće krpili nego u operacionoj sali.',
        'Novac potrošen u kafani je novac uložen u sećanja.',
        'Bolje da te iznose iz kafane nego iz kuće.',
        'Sa pravim ljudima nema pogrešne kafane.',
        'Sve se svodi na to kome prvom šaljete poruku kada ste pijani u kafani.',
        'Kafana je oobdanište za odrasle.',
        'Svaki čovek ima određeni broj dana u životu. Vreme provedeno u kafani ne računa se u konačan zbir.',
        
    ]
    const Quote = ({text}) => {
        return(
        <p>{text}</p>
        )
    }

    return (
        <div className = 'quotes'>
            <h3>Citati o kafanama</h3>
            <Container>
 
  <Row>
    <Col> <b><Quote text={quotes[index]} /></b>
            <button className='btn-quotes' onClick={() => setIndex(Math.floor(Math.random()* quotes.length))}>Danasnji citat</button></Col>
    <Col> <iframe src="https://scratch.mit.edu/projects/382573673/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen title = "Ziveli"></iframe></Col>
    <Col>{ <Quotes2 />}</Col>
  </Row>
</Container>


           
      
       
        </div>
    )
}

