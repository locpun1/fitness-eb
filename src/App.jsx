import "./App.css";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
    return (
        <div id="app">
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
