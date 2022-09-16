import Homepage from "../components/home";
import Navigate from "../components/Navigation";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navigate/>
      <Homepage/>
      <Footer/>
    </div>
  );
}
