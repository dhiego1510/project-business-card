
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  
  return (
    <section className='app-container'>

      <main className='app-container-two' >
        <Header/>
        <MainContent/>
        <Footer/>
      </main>
      
    </section>
  )
}

export default App
