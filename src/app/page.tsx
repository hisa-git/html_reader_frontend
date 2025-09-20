import TagCounter from "./components/TagCounter/TagCounter";
import Header from "./components/HeaderMenu/Header";
import { FooterCentered } from "./components/Footer/FooterCentred";
import StepperSeo from "./components/Stepper/StepperSeo"

export default function Home() {
  return (
    <>
      <Header></Header>
      <TagCounter />
      <StepperSeo></StepperSeo>
      <FooterCentered></FooterCentered>
    </>
  );
}
