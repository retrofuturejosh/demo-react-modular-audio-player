import React, { Component } from "react";

import TableOfContents from "./TableOfContents";
import Setup from "./Setup";
import Props from "./Props";
import Rearrange from "./Rearrange";
import Styling from "./Styling"

export default class Docs extends Component {
  constructor() {
    super();
    this.scrollTo = this.scrollTo.bind(this);
    this.addRef = this.addRef.bind(this);
  }

  scrollTo(scrollToLocation) {
    this[scrollToLocation].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  addRef(ref, name) {
    this[name] = ref;
  }

  render() {
    return (
      <div className="docs">
        <TableOfContents scroll={this.scrollTo} />
        <Setup addRef={this.addRef}/>
        <Props addRef={this.addRef}/>
        <Rearrange addRef={this.addRef}/>
        <Styling addRef={this.addRef}/>
      </div>
    );
  }
}
