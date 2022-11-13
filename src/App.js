import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import NavBar from "./components/Navbar.js";
import RecentPosts from "./components/RecentPosts/RecentPosts.js";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default App;
