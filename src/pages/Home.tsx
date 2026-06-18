import "./Home.css";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import PlatformPreview from "../components/PlatformPreview";
import WhyLumina from "../components/WhyLumina";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="home">
      <Navbar />

      <section className="hero">
        <span className="badge">
          NEXT GENERATION TRADING PLATFORM
        </span>

        <h1>
          Navigate the
          <br />
          Financial Universe
        </h1>

        <p>
          Professional-grade trading infrastructure inspired by the
          exploration of the cosmos.
        </p>

        <div className="hero-buttons">
          <button>Launch Platform</button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </section>

      <Stats />

      <PlatformPreview />

      <WhyLumina />

      <Footer />
    </main>
  );
}