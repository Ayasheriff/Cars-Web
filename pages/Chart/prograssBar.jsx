// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const percentage = 66;

// <CircularProgressbar value={percentage} text={`${percentage}%`} />;




import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;

<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;






//another prograssbar



import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

const App = () => {
  const [valueEnd, setValueEnd] = React.useState(66);
  return (
    <div style={{ padding: "40px 40px 40px 40px", margin: "auto" }}>
      <Example label="Initial animation upon mount with ProgressProvider wrapper">
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
        </ProgressProvider>
      </Example>
      <button onClick={() => setValueEnd(90)}>Change valueEnd</button>
    </div>
  );
};

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: 100 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));

export default Example;