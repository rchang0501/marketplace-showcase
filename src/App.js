import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Products. Start Selling and Growing"
        description="Buy, store, collect digital artwork. Join hundred of people using this marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a modern user interface market place application that can be used for both Android and iOS"
        mockupImg={assets.homeCards}
        reverse 
      />
    </>
  );
};

export default App;
