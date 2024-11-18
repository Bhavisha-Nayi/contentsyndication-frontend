import Layout from '../../layouts/Layout';
import ServicesPage from '../../components/sections/Services';

const Services = () => {
    return (
        <Layout title="Welcome to Contentsyndication">
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                <ServicesPage />
            </main>
        </Layout>
    );
};

export default Services;