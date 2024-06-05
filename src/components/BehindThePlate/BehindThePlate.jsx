
import { useSelector } from "react-redux"

const BehindThePlate = () => {
const behindThePlate = useSelector(store => store.behindThePlate)
return (
    <>
<h2>Behind The Plate: {behindThePlate}</h2>
    </>
)

}


export default BehindThePlate