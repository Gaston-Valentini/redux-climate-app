import { connect } from "react-redux";

import style from "./City.module.css";

import { remove } from "../../Redux/actions";

function City(props) {
    return (
        <div className={style.city}>
            <button onClick={() => props.remove(props.id)} className={style.button}>X</button>
            <p className={style.info}><i><strong>Location: </strong></i>{props.location}</p>
            <p className={style.info}><i><strong>Temperature: </strong></i>{props.temperature}ºC</p>
            <p className={style.info}><i><strong>Humidity: </strong></i>{props.humidity}%</p>
            <p className={style.info}><i><strong>Wind Speed: </strong></i>{props.windSpeed} km/h</p>
        </div>
    )
}

function mapDispatchToProps(dispath) {
    return {
        remove: function (params) {
            dispath(remove(params))
        }
    }
}

export default connect(null, mapDispatchToProps)(City)