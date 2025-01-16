import Layout from "./components/layout";
import Intro from "./components/intro";
import TimeLine from "./components/Timeline";
import Portfolio from "./components/portfolio";

export default function App() {
  return (
    <Layout>
      <Intro />
      <TimeLine />
      <Portfolio />
    </Layout>
  );
}
