import React from "react";
import { UserContext } from "../../contexts/User/index";

const Main = () => {
  const [state, dispatch] = React.useContext(UserContext);
  return (
    <div>
      <p>Main component state: {JSON.stringify(state)}</p>
      <button onClick={() => dispatch({ type: "toggle_button" })}>
        toggle from main
      </button>
    </div>
  );
};

export default Main;
