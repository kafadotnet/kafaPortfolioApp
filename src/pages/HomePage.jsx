import NavigationLayout from "../layouts/NavigationLayout";
import ProfileLayout from "../layouts/ProfileLayout";

const HomePage = () => {
  return (
    <>
      <header className="bg-gradient-theme">
        <NavigationLayout/>
        <ProfileLayout />
      </header>
      HomePage
    </>
  )
}

export default HomePage;