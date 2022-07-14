import PropTypes from "prop-types";
import { Message } from "./Notification.styled";

function Notification({ message }) {
  return <Message className="notification">{message}</Message>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
