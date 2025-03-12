import { useLoaderData } from "react-router-dom";
import { FilmData } from "../../api/types/types";
import { useRef } from "react";

export default function Player () {
  const Vref = useRef<HTMLVideoElement>(null);
  const { film_data }: FilmData = useLoaderData() as FilmData;

  const HandlePaly = () => {
    console.log(Vref.current)
    if (Vref.current) {
      Vref.current.play();
    }
  }
  return (
    <div className="player">
      <video src={film_data.videoLink} className="player__video" ref={Vref} onCanPlay={HandlePaly} controls></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" >Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
