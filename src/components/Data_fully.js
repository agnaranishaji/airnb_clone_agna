import React from "react";
import Grid from "./Grid";
export default function Cards() {
  return (
    <div className="cards">
      <Grid
        image="../images/ankur-warikoo.png"
        title="Work Ethics with Ankur Warikoo"
        rating="5"
        rating_count="(6)"
        region="Online"
        price="100"
      />
      <Grid
        image="../images/japan-forest.png"
        title="Sightseeing in Japan"
        rating="4.7"
        rating_count="(20)"
        region="Japan"
        price="500"
      />
      <Grid
        image="../images/scuba-diving.png"
        title="Diving in The Great Barrier Reef"
        rating="4.8"
        rating_count="(200)"
        region="Australia"
        price="750"
      />
      <Grid
        image="../images/grand-canyon.png"
        title="Learn Canyon Photography"
        rating="4.5"
        rating_count="(48)"
        region="USA"
        price="150"
      />
      <Grid
        image="../images/mountain-bike.png"
        title="Solo Mountain Biking"
        rating="4.9"
        rating_count="(312)"
        region="Norway"
        price="200"
      />
    </div>
  );
}
