import { useSelector } from "react-redux";

const OnTheMound = () => {
const onTheMound = useSelector(store => store.onTheMound)

return (<h2>On the Mound: {onTheMound}</h2>)

}

export default OnTheMound