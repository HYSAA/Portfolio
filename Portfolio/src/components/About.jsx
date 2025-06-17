import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about">
     <h2>About</h2>
   <h1>How eager am I to learn?</h1>
      <p>I discovered my passion for design when I found myself really invested in perfecting the visuals of the systems I was programming in freshman year. I started out focusing on functionality, but soon got interested in design and user experience. That led me to dive into the world of UI, UX, and product design.</p>
    
    <h4>
       <FaMapMarkerAlt style={{ color: 'gray', marginRight: '8px' }} />
      Cebu City, Philippines</h4>
    </section>
  );
}
