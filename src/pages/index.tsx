import Layout from '../layouts/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AboutUs from '../components/sections/AboutUs';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import Brands from '../components/sections/Brands';

const HomePage = () => {
    return (
        <Layout title="Welcome to AgenceX">
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                <Hero />
                <Brands />
                <Services />
                <AboutUs />
                <Features />
                <CTA />
            </main>
        </Layout>
    );
};

export default HomePage;
