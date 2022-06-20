import { connect } from "react-redux";

import style from "./Cities.module.css";

import City from "../City/City";

function Cities(props) {
    return (
        <div className={style.cities}>
            {props.cities.map(city => (
                <City
                    location={city.location}
                    temperature={city.temperature}
                    humidity={city.humidity}
                    windSpeed={city.windSpeed}
                    id={city.id}
                    key={city.id}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cities: state
    }
}

export default connect(mapStateToProps,null)(Cities)