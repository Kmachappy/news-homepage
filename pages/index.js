import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import BodyContent from "../components/BodyContent";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <BodyContent />
      </Layout>
    </>
  );
}
