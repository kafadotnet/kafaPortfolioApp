import AboutMe from "../layouts/AboutMe";
import NavigationLayout from "../layouts/NavigationLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import Stacks from "../layouts/Stacks";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout />
        <ProfileLayout />
      </header>
      <AboutMe />
      <Stacks />
    </>
  )
}

export default HomePage;