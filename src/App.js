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
    </>
  );
};

export default App;
