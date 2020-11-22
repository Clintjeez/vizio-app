import React from "react";
import { Link, Button, Panel, Block } from "framework7-react";

import "./nav.css";

function nav() {
  return (
    <div className="nav__container">
      <div className="brand__col">
        <Link className="brand__col__link" href="/">
          Vizio
        </Link>
      </div>
      <div className="nav__col">
        <Button
          className="toggle__btn"
          small
          panelToggle="right"
          iconF7="bars"
        />
        <Panel right>
          <Block>
            <ul className="nav__menu">
              <li>
                <Link className="nav__items">Home</Link>
              </li>
              <li>
                <Link className="nav__items">About</Link>
              </li>
              <li>
                <Link className="nav__items">Contact</Link>
              </li>
              <li>
                <Link className="nav__items">FAQS</Link>
              </li>
            </ul>
          </Block>
        </Panel>
      </div>
    </div>
  );
}

export default nav;
