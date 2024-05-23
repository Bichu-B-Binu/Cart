import { Alert } from "react-bootstrap"
// eslint-disable-next-line react/prop-types
function Message({childern,variant})  {
  return  <Alert variant={variant}>{childern}</Alert>
  
}

Message.defaultProps={
  variant:"info"
};


export default Message;