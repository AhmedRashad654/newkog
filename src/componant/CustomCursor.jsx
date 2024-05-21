import React, { useEffect, useState } from "react";
import style from "../componantStyle/CustomCursor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.pageX, y: event.pageY });
    };
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={style.container}>
      <div></div>
      {isVisible && (
        <FontAwesomeIcon
          icon={faHandPointer}
          className={style.customCursor}
          // style={{ left: cursorPosition.x, top: cursorPosition.y }}
          style={{
            left: cursorPosition.x + "px",
            top: cursorPosition.y + "px",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
}
