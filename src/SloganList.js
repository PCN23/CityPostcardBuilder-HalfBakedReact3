import React from 'react';

export default function SloganList({ slogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {
        // slogans.map((slogan, i) => <li key={slogan + 1}>{slogan}</li>)
      }
    </section>
  );
}

