import { useState } from "react";
import { useDispatch } from "react-redux";

const PitcherForm = () => {

    const dispatch = useDispatch()

    const [newPitcher, setNewPitcher] = useState('');
    const handlePitcherSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_PITCHER', payload: newPitcher})
        setNewPitcher('');
      };

      const handlePitcherNameChange = event => {
        setNewPitcher(event.target.value);
      };

    return (
        <>
        <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
        </>
    )

}

export default PitcherForm