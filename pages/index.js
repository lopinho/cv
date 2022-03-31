import Layout from "../components/Layout";
import Header from "../components/Header";
import Lead from "../components/Lead";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Layout pageTitle="Curriculum vitæ">
      <Header/>
      <Lead/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </Layout>
  )
}
export default Index;