import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Applications from './components/Applications'
import Birthdays from './components/Birthdays'
import Magazine from './components/Magazine'
import DirectionCouncil from './components/DirectionCouncil'
import News from './components/News'
import ServiceNotes from './components/ServiceNotes'
import MediaLibrary from './components/MediaLibrary'
import Events from './components/Events'
import Directory from './components/Directory'
import HealthEstablishments from './components/HealthEstablishments'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-grid').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <HeroSlider />

      {/* Section 1 — Services & Vie d'entreprise */}
      <section className="section-wrapper py-10 xl:py-14">
        <div className="w-full max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20">
          <div className="reveal mb-8">
            <span className="section-label">Espace collaborateur</span>
            <h2 className="section-title">Services & Vie d&apos;entreprise</h2>
          </div>
          <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Applications />
            <Birthdays />
            <Events />
          </div>
        </div>
      </section>

      {/* Section 2 — Actualités & Publications */}
      <section className="section-wrapper section-alt py-10 xl:py-14">
        <div className="w-full max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20">
          <div className="reveal mb-8">
            <span className="section-label">Restez informé</span>
            <h2 className="section-title">Actualités & Publications</h2>
          </div>
          <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <News />
            <ServiceNotes />
            <Magazine />
          </div>
        </div>
      </section>

      {/* Section 3 — Médiathèque */}
      <section className="section-wrapper py-10 xl:py-14">
        <div className="w-full max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20">
          <div className="reveal">
            <MediaLibrary />
          </div>
        </div>
      </section>

      {/* Section 4 — Annuaire & Réseau */}
      <section className="section-wrapper section-alt py-10 xl:py-14">
        <div className="w-full max-w-480 mx-auto px-4 sm:px-6 xl:px-12 2xl:px-20">
          <div className="reveal mb-8">
            <span className="section-label">Organisation</span>
            <h2 className="section-title">Annuaire & Réseau</h2>
          </div>
          <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Directory />
            <DirectionCouncil />
            <HealthEstablishments />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
