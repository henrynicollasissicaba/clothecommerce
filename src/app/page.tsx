import Categories from "./components/sections/Categories";
import Footer from "./components/sections/Footer";
import HomePage from "./components/sections/HomePage";
import Products from "./components/sections/Products";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import TimingOut from "./components/sections/TimingOut";
import Visuals from "./components/sections/Visuals";

export default function Home() {
  return (
    <main className="max-w-[90rem] w-full mx-auto bg-stone-100 min-h-lvh overflow-hidden flex flex-col gap-10">
      <HomePage />
      <Categories />
      <Products />
      <TimingOut />
      <Visuals />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
