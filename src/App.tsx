// components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Plan from "./components/Plan"
import QA from "./components/QA"
import SignUp from "./components/SignUp"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plan />
        <QA />
        <SignUp />
      </main>
      <Footer />
    </>
  )
}
 
export default App