import { useSelector, useDispatch } from "react-redux";

const CatcherList = () => {
const catcherList = useSelector(store => store.catcherList)
const dispatch = useDispatch()
return (

    <>
    <ul>
        {catcherList.map(catcher => (
          <li
            key={catcher} onClick={() => dispatch({type: 'BEHINDTHEPLATE', payload: catcher})}
        >
            {catcher}
          </li>
        ))}
      </ul>
    </>

)

}
 export default CatcherList