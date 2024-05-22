import { Spinner } from "react-bootstrap"
const Loder = () => {
  return (
    <Spinner
    animation="border"
    role="status"
    style={{
        width:"100px",
        height:"100px",
        margin:"auto",
        display:"block"
    }}
    ></Spinner>
  )
}

export default Loder