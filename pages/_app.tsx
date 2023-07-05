import Layout from "../components/Layout";
import '../utils/global.css';
import '../utils/normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

