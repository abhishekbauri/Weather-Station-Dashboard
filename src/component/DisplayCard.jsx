import "./DisplayCard.css";
const DisplayCard = (props) => {
  const { weather, main, wind } = props;

  return (
    <div className="display_outer_card">
      <div className="display_data">
        <div className="data">
          <p>
            temperature : <span> {main.temp} °C</span>{" "}
          </p>
        </div>
        <div className="data">
          <p>
            humidity : <span>{main.humidity} % </span>{" "}
          </p>
        </div>
        <div className="data">
          <p>
            wind speed : <span>{wind.speed} m/s </span>{" "}
          </p>
        </div>
        <div className="data">
          <p>
            weather condition : <span>{weather[0].description} </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
