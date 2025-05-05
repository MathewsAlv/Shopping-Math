import NavBar from "../../screens/home/components/navbar";
import Module from "../../screens/home/components/header";
import Description from "../../screens/home/components/description";
import Services from "../../screens/home/components/services";
import Interlude from "../../screens/home/components/interlude";
import SlideRev from "../../screens/home/components/slide_rev";
import ContactInfo from "../../screens/home/components/contact_info";
import Footer from "../../screens/home/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Module />
      <Description />
      <Services />
      <Interlude />
      <SlideRev />
      <ContactInfo />
      <Footer />
    </div>
  );
}
