import { connect } from "react-redux";
import style from "./Searcher.module.css";
import { add } from "../../Redux/actions";

function Searcher(props) {
    const onSearch = (event) => {
        event.preventDefault()
        let city = document.querySelector("#city").value
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=99ce7d1a0b5b1dd8b40d0683b2885174`)
        .then(response => response.json())
        .then(res => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res[0].lat}&lon=${res[0].lon}&appid=99ce7d1a0b5b1dd8b40d0683b2885174`))
                    .then(response => response.json())
                    .then(res => props.add({location: res.name, temperature: res.main.temp, humidity: res.main.humidity, windSpeed: res.wind.speed, id: res.id}))
    }
    return (
        <form className={style.searcher}>
            <input id="city" placeholder="Enter your city name" className={style.input}></input>
            <button onClick={onSearch} className={style.button}>Search</button>
        </form>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        add: function (params) {
            dispatch(add(params))
        }
    }
}

export default connect(null, mapDispatchToProps)(Searcher)