import style from "./App.module.css";

import Searcher from "./Components/Searcher/Searcher";
import Cities from "./Components/Cities/Cities";
import Contact from "./Components/Contact/Contact";

export default function App() {
    return (
        <div className={style.app}>
            <Searcher/>
            <p className={style.p}>Cities on search</p>
            <Cities/>
            <Contact/>
        </div>
    )
}