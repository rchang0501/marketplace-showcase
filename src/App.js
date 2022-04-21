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
      <Features />
      <SectionWrapper
        title="Deployment"
        description="This app is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all products while the second one shows the details of a specific product."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
    </>
  );
};

export default App;
