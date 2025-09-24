import TagCounter from "./components/TagCounter/TagCounter";
import Header from "./components/HeaderMenu/Header";
import { FooterCentered } from "./components/Footer/FooterCentred";
import StepperSeo from "./components/Stepper/StepperSeo";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <TagCounter />
        <StepperSeo />
      </main>
      <FooterCentered />
    </div>
  );
}
