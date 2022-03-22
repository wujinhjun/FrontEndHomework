import { Switch, Route } from '@modern-js/runtime/router';

import './folderForCSS/App.css';
import './folderForCSS/index.css';
import { MainPage } from './Component/MainPage';

export function App() {
  return (
      <>
      <MainPage />
      <footer className="info">
        <div className="tips">
          <p>Double-click to edit a todo</p>
        </div>
        <p>A homework for learing the react</p>
        <p>
          Created by the bigwig{' '}
          <a href="http://github.com/petehunt/">petehunt</a>
        </p>
        <p>
          Maded by a designer{' '}
          <a href="https://github.com/wujinhjun">wujinhjun</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
      </>
  )
};

export default App;
