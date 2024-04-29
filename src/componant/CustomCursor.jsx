import React, { useEffect, useState } from 'react'
import style from "../componantStyle/CustomCursor.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
export default function CustomCursor() {
    const [ cursorPosition, setCursorPosition ] = useState( { x: 0, y: 0 } );
useEffect(() => {
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.pageX, y: event.pageY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

     return (
       <div className={style.container}>
         <div></div>
         <FontAwesomeIcon
           icon={faHandPointer}
           className={style.customCursor}
           style={{ left: cursorPosition.x, top: cursorPosition.y }}
         />
       </div>
     );
}
