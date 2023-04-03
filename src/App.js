import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="'Otaku' provides the perfect anime list for You."
        description="You can see the anime's details along with there imdb rating on a single platform."
        showBtn
        mockupImg={assets.home}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface"
        description="Experience a buttery UI of Otaku to know more about anime."
        mockupImg={assets.home}
        reverse
        count
      />
      <Features/>
      <SectionWrapper
        title="Deployment"
        description="Otaku is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface"
        description="Experience a buttery UI of Otaku to know more about anime."
        mockupImg={assets.home}
        reverse
        count
      />
    </>
  );
}

export default App;
