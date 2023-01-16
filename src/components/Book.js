import React from "react";
import HTMLFlipBook from "react-pageflip";
import busymeadow from "../assets/busymeadow.png";
import lazybee from "../assets/lazybeelounging.png";
import outcasted from "../assets/outcasted.png";
import hardworking from "../assets/hardworking.png";
import teaching from "../assets/teaching.png";
import happyhive from "../assets/happyhive.png";
import bella from "../assets/bella.png";
import end from "../assets/end.png";

import "./Book.css";

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="page" ref={ref}>
        <div className="page-content" style={{ backgroundImage: `url(${props.image})`}}>
          <h1>{props.title}</h1>
          <p className={`text-content ${props.textPosition} ${props.textSize}`}>{props.children}</p>
          <p className="page-number">{props.number}</p>
        </div>
      </div>
  );
});

function Book(props) {
  return (
      <HTMLFlipBook width={500} height={500} showCover={true}>
          <Page image={busymeadow} title="Sharing is Caring">
          </Page>
          <Page number="1" image={bella} textPosition="bottom" textSize="large">
            Once upon a time, in a buzzing meadow, there lived a hardworking honey bee named Bella.
          </Page>
          <Page number="2" image={hardworking} textPosition="bottom" textSize="large">
            Bella was a diligent worker and was always busy collecting nectar from the flowers. She would then bring the nectar back to her hive to make delicious honey.
          </Page>
          <Page number="3" image={lazybee} textPosition="top" textSize="medium">
            One day, Bella met a new bee named Buzzy. Buzzy was lazy and would not help with the collecting and making of honey. He would spend all his time lounging around and eating the honey that Bella and the other bees worked so hard to make.
          </Page>
          <Page number="4" image={outcasted} textSize="large">
            The other bees in the hive began to notice how lazy Buzzy was and they started to ignore him. 
          </Page>
          <Page number="5" image={teaching} textSize="small">
            Bella, being the kind and hardworking bee she was, decided to teach Buzzy the importance of working together and sharing. Bella showed Buzzy how to collect nectar and make honey. She also taught him how important it was to share the honey with the other bees in the hive. Slowly but surely, Buzzy began to understand and started to help with the work and share the honey.
          </Page>
          <Page number="6" image={happyhive} textSize="medium">
            The hive was now filled with cooperation and teamwork as all the bees worked together and shared the honey. Buzzy realized that by sharing and working together, he was not only helping the hive but also being a part of a community.
          </Page>
          <Page image={end} title="The End">
            
          </Page>
      </HTMLFlipBook>
  );
}

export default Book;