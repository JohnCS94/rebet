import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import Lottie from "lottie-react";

import glowing_left_arrows from "../../assets/Lottie/glowing_left_arrows.json";
import glowing_right_arrows from "../../assets/Lottie/glowing_right_arrows.json";

import {
  getArrowsLeft,
  getArrowsRight,
  getButton,
  getTrackBorder,
  getTrackColor,
  getTrackTextColor,
  getTypeAccept,
  getTypeDecline,
} from "../themeUtils";
import "./slider.css";

interface SliderProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Slider = ({ setOpen }: SliderProps) => {
  const [value, setValue] = useState<number>(50);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragDirection, setDragDirection] = useState("none");
  const [shouldWiggle, setShouldWiggle] = useState(false);

  const positionRef = useRef<number>(150);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const shiftX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;

    setIsDragging(true);

    const moveAt = (pageX: number) => {
      const newPosition = pageX - shiftX - trackRect.left;

      if (event.pageX < positionRef.current) {
        setDragDirection("left");
      } else if (event.pageX > positionRef.current) {
        setDragDirection("right");
      }

      const clampedPosition = Math.max(
        6,
        Math.min(newPosition, trackRect.width - 60)
      );
      setPosition(clampedPosition);

      const newValue = Math.round(
        (clampedPosition / (trackRect.width - 50)) * 100
      );
      positionRef.current = clampedPosition;
      setValue(newValue);
    };

    const onMouseMove = (event: MouseEvent) => {
      moveAt(event.pageX);
    };

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener(
      "mouseup",
      () => {
        if (positionRef.current > 350) {
          setOpen(true);
        }

        setIsDragging(false);
        document.removeEventListener("mousemove", onMouseMove);

        const trackWidth = trackRect.width;
        setPosition(trackWidth / 2 - 25);
        setValue(50);
        setShouldWiggle(false);
        setTimeout(() => setShouldWiggle(true), 0);
        setDragDirection("none");
      },
      { once: true }
    );

    event.preventDefault();
  };

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      setPosition(trackWidth / 2 - 25);
    }
  }, []);

  return (
    <div className="slider-container">
      <span
        className="slider-text"
        style={{ color: getTrackTextColor(value), paddingTop: 15 }}
      >
        <div className="track-text" style={{ paddingLeft: 5 }}>
          <img src={getTypeDecline(value)} height={30} />
          <span>Decline</span>
        </div>
        <div className="track-text">
          <img src={getArrowsLeft(value)} height={30} />
        </div>
        <div style={{ width: "20%" }}></div>
        <div className="track-text">
          <img src={getArrowsRight(value)} height={30} />
        </div>
        <div className="track-text" style={{ paddingRight: 5 }}>
          <span>Accept</span>
          <img src={getTypeAccept(value)} height={30} />
        </div>
      </span>
      <div
        style={{
          opacity: value === 50 ? 1 : 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={glowing_left_arrows}
          style={{
            height: 32,
            position: "absolute",
            zIndex: 10,
            top: "41%",
            left: "29%",
          }}
        />
        <Lottie
          animationData={glowing_right_arrows}
          style={{
            height: 32,
            position: "absolute",
            zIndex: 10,
            top: "41%",
            right: "29%",
          }}
        />
      </div>
      <div className={`custom-track ${getTrackBorder(value)}`}>
        <div className={`custom-track-inner ${getTrackColor(value)}`} />
      </div>
      <div className={`custom-track ${getTrackBorder(value)}`} ref={trackRef}>
        <div className={`custom-track-inner ${getTrackColor(value)}`} />
      </div>
      <div
        onMouseDown={handleMouseDown}
        className={`${value === 50 && "glow"}`}
        style={{
          borderRadius: "50%",
          position: "absolute",
          left: `${position + 15}px`,
          top: 25,
          cursor: isDragging ? "grabbing" : "grab",
          transition: isDragging ? "none" : "left 0.3s ease",
          animation: shouldWiggle
            ? `${
                dragDirection === "left"
                  ? "wiggleLeft 0.5s"
                  : "wiggleRight 0.5s"
              }, glow 1s ease-in-out infinite alternate`
            : "glow 1s ease-in-out infinite alternate",
          zIndex: 1000,
          height: 65,
        }}
      >
        <img src={getButton(value)} height={65} />
      </div>
    </div>
  );
};

export default Slider;
