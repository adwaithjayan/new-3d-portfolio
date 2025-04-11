import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/showcaseSection.jsx";
import NavBar from "./components/navbar.jsx";
import LogoShowcase from "./sections/logos.jsx";
import FeatureCards from "./sections/features.jsx";
import TechStack from "./sections/techStack.jsx";
import Experience from "./sections/experiance.jsx";
import Testimonials from "./sections/testimonial.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/footer.jsx";

export default function App() {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            <LogoShowcase/>
            <FeatureCards/>
            <Experience/>
            <TechStack/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}
