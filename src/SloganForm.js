
import { useState } from 'react';

export default function SloganForm({ slogans, setSloganList }) {
  const [sloganInput, setSloganInput] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setSloganList([...slogans, sloganInput]);
    setSloganInput('');
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        <input value={sloganInput} onChange={e => setSloganInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
// Track the sloganInput form state with a useState hook

{/* on change, set the sloganInput in state to be the input value */}
{/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}

// Also, this component also takes in a prop called slogans, which is an array of strings. //// On submit call the setSlogans state with a new array that is a copy of the old array with the new slogan immutably added to the end
// set the sloganInput form state to an empty string to reset the form
// React forms are a pain! 
// This component takes in a prop called setSlogans, which is a function that takes in an array of slogans. 

{/* on submit, call the handleSubmit function, defined above */}

