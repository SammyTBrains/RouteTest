import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <Fragment>
      <h1>My home page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>
        {/*Relative path just appends to end of currently active path, no slash in front*/}
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate to products</button>
      </p>
    </Fragment>
  );
};

export default HomePage;
