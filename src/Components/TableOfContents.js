import React, { Component } from "react";

const TableOfContents = props => {
  let { scroll } = props;
  return (
    <div className="index">
      <h2> Table of Contents </h2>
      <ul>
        <li className="li-main">
          <span onClick={e => scroll("setup")} className="li-header">
            {" "}
            Setup{" "}
          </span>
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
          <ul>
            <li>
              <span
                className="li-sublist"
                onClick={e => scroll("subcomponents")}
              >
                Subcomponents
              </span>
            </li>
            <li>
              <span className="li-sublist" onClick={e => scroll("tierObject")}>
                Tier Object
              </span>
            </li>
            <li>
              <span className="li-sublist" onClick={e => scroll("tierExample")}>
                Subcomponents
              </span>
            </li>
            <li>
              <span
                className="li-sublist"
                onClick={e => scroll("rearrangeStyle")}
              >
                Rearrange Styling
              </span>
              <ul>
                <li>
                  <span
                    className="li-sublist"
                    onClick={e => scroll("tierStyle")}
                  >
                    Default Tier Styling
                  </span>
                </li>
                <li>
                  <span
                    className="li-sublist"
                    onClick={e => scroll("innerComponentStyle")}
                  >
                    Default InnerComponent Style
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span
                className="li-sublist"
                onClick={e => scroll("rearrangeExample")}
              >
                Rearrange Example
              </span>
            </li>
          </ul>
        </li>
        <li className="li-main" onClick={e => scroll("styling")}>
          <span className="li-header"> Styling </span>
          <ul>
            <li>
              <span className="li-sublist" onClick={e => scroll("mainStyle")}>
                AudioPlayer Component
              </span>
            </li>
            <li>
              <span className="li-sublist" onClick={e => scroll("icons")}>
                Icons
              </span>
            </li>
            <li>
              <span className="li-sublist" onClick={e => scroll("range")}>
                Range Inputs
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContents;
