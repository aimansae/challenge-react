import css from './App.module.css';
import FunctionalSidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple'

//testing
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/css/StetefulGreting';

function App() {
  return (
    <div className={css.App}>
      <FunctionalSidebar/>
      <NavBarSimple/>
    </div>
  );
}

export default App;