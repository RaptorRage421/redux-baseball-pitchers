import { useState } from "react";
import { useDispatch } from "react-redux";

const CatcherForm = () => {

const dispatch = useDispatch()
const [newCatcher, setNewCatcher] = useState('');


const handleCatcherSubmit = event => {
    event.preventDefault();
    // spread: give me everything in catcherList, then add this new thing
    dispatch({type: 'ADD_CATCHER', payload: newCatcher})
    // setCatcherList([...catcherList, newCatcher]);
    setNewCatcher('');
  };


  const handleCatcherNameChange = event => {
    setNewCatcher(event.target.value);
  };

return (

<>
<form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
</>

)



}

export default CatcherForm