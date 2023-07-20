import { App } from '../App';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Root = () => {
    return (
      <section className="root">
        <Header />
        <div id="detail">
            <App />
        </div>
        <Footer />
      </section>
    );
  }