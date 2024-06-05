import { useSelector } from "react-redux";

const TotalPitchers = () => {
const pitcherList = useSelector(store => store.pitcherList)
    return (

<>
<div>Total Pitchers: {pitcherList.length}</div>
</>

    )
}

export default TotalPitchers