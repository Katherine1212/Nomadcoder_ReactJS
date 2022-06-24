import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseEffect from './useEffect';
import CleanUp from './cleanUp';
import TODO_1 from './todoList_1';


/* React 18 이후로 이 방식은 쓰지 않음.
  import ReactDOM from 'react-dom';
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense>
    {/* <App />
    <UseEffect /> */}
    {/* <CleanUp /> */}
    <TODO_1 />
  </React.Suspense>
);
