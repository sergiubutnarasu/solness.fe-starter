import React, { FunctionComponent } from "react";
import { Documents, Summaries, WelcomeBox } from "../components";

const HomePage: FunctionComponent = () => (
  <>
    <WelcomeBox />
    <Summaries />
    <Documents />
  </>
);

export default HomePage;
