import Layout from "../components/Layout";
import '../utils/global.css';
import '../utils/normalize.css';
import { MyContextProvider } from '../utils/MyContext';

function MyApp({ Component, pageProps }) {
    return (
        <MyContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MyContextProvider>
    );
}
export default MyApp;

