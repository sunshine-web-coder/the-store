import style from "./Preloader.module.scss";
import { TypeAnimation } from "react-type-animation";

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <div className={style.spinner}>
        <img
          src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1694195170/Saturn%20new/l1sp5srjtscm7sliukmf.png"
          alt=""
        />
      </div>
      <TypeAnimation
      className="text-2xl text-[#171717] font-semibold"
        sequence={[
          "Saturn Bank", // Types 'One'
          1000, // Waits 1s
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
}
