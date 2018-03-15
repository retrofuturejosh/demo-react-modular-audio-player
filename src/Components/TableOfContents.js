import React, { Component } from "react";

const TableOfContents = props => {
  let { scroll } = props;
  return (
    <div className="index">
      <h2> Table of Contents </h2>
      <ul>
        <li className="li-main" >
          <span onClick={e => scroll("setup")} className="li-header"> Setup </span>
          <ul>
            <li>
              <span className="li-sublist" onClick={e => scroll("simple")}>
                Simple Example
              </span>
            </li>
          </ul>
        </li>
        <li className="li-main" onClick={e => scroll("props")}>
          <span className="li-header"> Props </span>
        </li>
        <li className="li-main" onClick={e => scroll("rearrange")}>
          <span className="li-header"> Rearrange Prop </span>
        </li>
        <li className="li-main" onClick={e => scroll("styling")}>
          <span className="li-header"> Styling </span>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;