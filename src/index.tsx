/** @jsx h */
import { h, render, Fragment } from "preact";
import { useState } from "preact/hooks";

function Counter() {
  const [state, setState] = useState(0);
  return (
    <button onClick={() => setState((n) => n + 1)}>{String(state)}</button>
  );
}

const b = document.querySelector("button");
console.log();
const id = b.getAttribute("data-id");

function App() {
  const [state, setState] = useState(false);
  return (
    <Fragment>
      <button
        data-id={id}
        onClick={() => {
          setState(true);
        }}
      >
        {id}
      </button>
      {state && (
        <div>
          <Counter />
        </div>
      )}
    </Fragment>
  );
}

render(<App />, document.body);
