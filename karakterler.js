import React, { useState } from 'react';
import {
    Accordion,
  

} from 'reactstrap';
  import Karakter from "./Karakter";
  
  const Karakterler = (props) => {
    const {data} = props;
    const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
};
    return  <div>
    <Accordion flush open={open} toggle={toggle}>
        Karakterler 
    {data.map((item) => (
        <Karakter item = {item}/>
    ))}
    </Accordion>
    </div>
}
export default Karakterler;
