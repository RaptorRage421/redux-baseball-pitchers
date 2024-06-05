import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalCatchers from '../TotalCatchers/TotalCatchers';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import PitcherForm from '../PitcherForm/PitcherForm';
import PitcherList from '../PitcherList/PitcherList';
import CatcherForm from '../CatcherForm/CatcherForm';
import OnTheMound from '../OnTheMound/OnTheMound';
import CatcherList from '../CatcherList/CatcherList';
import BehindThePlate from '../BehindThePlate/BehindThePlate';


function App() {

  const pitcherList = useSelector(store => store.pitcherList)
  const catcherList = useSelector(store => store.catcherList)
  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  // const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
  // const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);
  // const [newPitcher, setNewPitcher] = useState('');
  // const [newCatcher, setNewCatcher] = useState('');


  const dispatch = useDispatch() 



  // add new pitcher to the array. this will move to the pitcher reducer!
  // const handlePitcherSubmit = event => {
  //   event.preventDefault();
  //   // spread: give me everything in pitcherList, then add this new thing
  //   dispatch({type: 'ADD_PITCHER', payload: newPitcher})
  //   // setPitcherList([...pitcherList, newPitcher]);
  //   setNewPitcher('');
  // };



  // add new catcher to array. this will move to the catcher reducer!
  

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
     <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
    <PitcherForm />
     <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}

export default App;
