import { CTA } from './cta';
import { Header } from './header';
import { Hero } from './hero';
import { HowItWorks } from './how-it-works';
import { RealExamples } from './real-examples';

const Home = () => {
    return (
        <main className="flex-1 ">
            <Header />
            <Hero />
            <HowItWorks />
            <RealExamples />
            <CTA />
        </main>
    );
};

export default Home;
