// Karakter bileşeniniz buraya gelecek
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  const Karakter = (props) => {
    const {item} = props;
    return <AccordionItem>
    <AccordionHeader targetId={item.name}>{item.name}</AccordionHeader>
    <AccordionBody accordionId={item.name}>
      <p><strong>Height:</strong>{item.height}</p>
      <p><strong>Mass:</strong>{item.Mass}</p>
      <p><strong>Hair Color:</strong>{item.hair_Color}</p>
      <p><strong>Skin Color:</strong>{item.skin_color}</p>
      <p><strong>Eye Color:</strong>{item.eye_color}</p>
      <p><strong>Birth Year:</strong>{item.birth_year}</p>
      <p><strong>Gender:</strong>{item.gender}</p>
    </AccordionBody>
  </AccordionItem>
}
export default Karakter;


