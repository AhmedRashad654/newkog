import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from '../../componantStyle/SearchDash.module.css'
export default function SearchDash() {
  return (
    <div className={style.SearchDash}>
      <input
        type="text"
        name="searchdash"
        id="searchdash"
        placeholder="Search menus..."
      />
          <FontAwesomeIcon icon={ faMagnifyingGlass } className={ style.glass} />
    </div>
  );
}
