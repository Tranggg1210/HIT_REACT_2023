import Features from "./components/features/Features";
import './components/features/Features.scss';
import './App.css'
import Header from "./components/header/Header";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div>
      <Header />
      <Features />
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;



