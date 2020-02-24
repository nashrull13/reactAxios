import React from "react";
import useGlobal from "../store";
import createPersistedState from "@plq/use-persisted-state";

const [usePersistedState] = createPersistedState(
  "example",
  window.sessionStorage
);

const Counter = () => {
    const [count, setCount] = usePersistedState("count", 0);
    const increment = () => setCount(prevCount => prevCount + 1);
  const [globalState, globalActions] = useGlobal();
  const searchSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    globalActions.github.getReposByUsername(username);
  };
  return (
    <form onSubmit={searchSubmit}>
       <div>
      {count}
      <input name="username" placeholder="username" autoComplete="off" />
      <button onClick={increment} type="submit">
        Search
      </button>
        </div>
    </form>
  );
};

export default Counter;
