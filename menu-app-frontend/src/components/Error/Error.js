import "./Error.css";
const Error = ({ error }) => {
  console.log(error);
  return <p className="error">{error}</p>;
};

export default Error;
