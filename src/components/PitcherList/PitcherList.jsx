import { useSelector,useDispatch } from "react-redux"


const PitcherList = () => {
const pitcherList = useSelector(store => store.pitcherList)

const dispatch = useDispatch()
    return (
        <>
         <ul>
        {pitcherList.map(pitcher => (
          <li
            key={pitcher} onClick={() => dispatch({type: 'ONTHEMOUND', payload: pitcher})}
        >
            {pitcher}
          </li>
        ))}
      </ul>
        </>
    )
}

export default PitcherList