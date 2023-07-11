import Layout from "../components/Layout";
import '../utils/global.css';
import '../utils/normalize.css';
import { MyContextProvider } from '../utils/MyContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <MyContextProvider>
            <Head>
                <title>Sticky Wall</title>
                <link rel="icon" href="https://cdn.icon-icons.com/icons2/1859/PNG/512/checklist_117966.png" sizes="any" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MyContextProvider>
    );
}
export default MyApp;

