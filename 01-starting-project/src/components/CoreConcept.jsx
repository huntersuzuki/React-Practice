import React from 'react'
import { CORE_CONCEPTS } from '../data';
import CoreConcepts  from './CoreConcepts';
const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcepts key={conceptItems.title} {...conceptItems} />
        ))}
        {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}

export default CoreConcept