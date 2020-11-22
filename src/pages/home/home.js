import React from "react";
import { Page, Link } from "framework7-react";

import VirtualCard from "../../components/virtualCard/virtualCard";

import "./home.css";

export default () => (
  <Page name="home">
    <div className="container">
      <div className="home__content">
        <div className="home__txt">
          <h1>Unlocking the power of money for everyone</h1>
          <p>Virtual card. Instant loans. Pay bills. Credit reports</p>
          <Link className="home__btn" href="/onboarding">
            Get started
          </Link>
        </div>
        <VirtualCard />
      </div>
    </div>
  </Page>
);
