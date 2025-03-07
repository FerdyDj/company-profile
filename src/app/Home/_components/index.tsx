import ComOver from "./comover";
import Hero from "./hero";
import Hproduct from "./hproduct";
import Tagline from "./tagline";
import Testi from "./testimonial";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ComOver />
      <Hproduct />
      <Testi />
      <Tagline />
    </div>
  );
}
