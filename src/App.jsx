
import "./App.css";

import profilePic from "./assets/ProfilePic.jpeg";
import creatorLogo from "./assets/RafaelsizaLogo.png";
import developerLogo from "./assets/RafaelProgramadorLogo.png";
import tacosLogo from "./assets/LogoTacosLosPrimos.png";

// Sustituye las X por los 10 dígitos de tu número de WhatsApp.
// Incluye el código de país de México (52), sin + ni espacios.
const whatsappNumber = "524531285884";

const whatsappMessage =
  "Hola, Rafael. Estoy interesado/a en desarrollar una página web para mi negocio. Me gustaría conocer tus servicios y solicitar una cotización. ¿Podemos hablar sobre mi proyecto?";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const projects = [
  {
    title: "rafaelsiza",
    category: "CREATOR",
    description: "Series, películas, cultura pop y todo lo que me encanta.",
    image: creatorLogo,
    fallback: "RS",
    action: "Explorar contenido",
    url: "https://rafaelsiza-linktree.vercel.app/",
  },
  {
    title: "Rafael Silva",
    category: "DEVELOPER",
    description: "Mi portafolio, proyectos y camino en el mundo tecnológico.",
    image: developerLogo,
    fallback: "</>",
    action: "Ver portafolio",
    url: "https://mi-portafolio-mu-eight.vercel.app/",
  },
  {
    title: "Tacos Los Primos",
    category: "FOOD & BUSINESS",
    description: "Conoce nuestro negocio, menú y opciones para disfrutar.",
    image: tacosLogo,
    fallback: "TP",
    action: "Visitar página",
    url: "https://tacoslosprimos-landingp.vercel.app/",
  },
];

function App() {
  return (
    <main className="page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="container">
        <header className="profile">
          <div className="profile-image">
            <span className="profile-fallback">RS</span>
            <img
              src={profilePic}
              alt="Foto de Rafael Silva Zapien"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>

          <p className="eyebrow">
            PERSONAL SPACE <span>✦</span>
          </p>

          <h1>
            Rafael <span>Silva Zapien</span>
          </h1>

          <p className="subtitle">
            Developer <span>·</span> Content Creator <span>·</span> Entrepreneur
          </p>

          <p className="intro">
            Desarrollo proyectos, comparto lo que me apasiona y construyo
            nuevas ideas.
          </p>

          <nav className="social-links" aria-label="Redes sociales">
            <a
              className="social-button"
              href="https://instagram.com/rafaelsiza_"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon" aria-hidden="true">◎</span>
              <span>Instagram</span>
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>

            <a
              className="social-button"
              href="https://www.tiktok.com/@rafaelsiza_"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon social-tiktok" aria-hidden="true">♪</span>
              <span>TikTok</span>
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        {/* Servicios profesionales */}
        <section className="services">
          <div className="services-topline">
            <span className="services-indicator" />
            DESARROLLO WEB INDEPENDIENTE
          </div>

          <h2>
            Tu negocio merece una
            <span> presencia digital profesional.</span>
          </h2>

          <p className="services-description">
            Creo páginas web para emprendedores, negocios, clínicas, agencias
            y empresas que quieren automatizar su empresa o simplemente presentar sus servicios de una mejor manera
            y conectar con más clientes.
          </p>

          <div className="services-tags">
            <span>Páginas web</span>
            <span>Sitios corporativos</span>
            <span>Soluciones a medida</span>
          </div>

          <a
            className="services-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>Hablemos de tu proyecto</strong>
              <small>Solicita información y una cotización</small>
            </span>
            <span className="services-cta-arrow" aria-hidden="true">↗</span>
          </a>

          <p className="services-note">
            ¿Tienes una idea? Cuéntame qué necesitas y lo revisamos juntos.
          </p>
        </section>

        {/* Proyectos y otras facetas */}
        <section className="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE MY WORLD</p>
              <h2>Mis espacios</h2>
            </div>
            <span className="sparkle-icon" aria-hidden="true">✧</span>
          </div>

          <div className="link-list">
            {projects.map((project, index) => (
              <a
                className="project-card"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                style={{ "--card-index": index }}
              >
                <div className="project-image">
                  <span className="image-fallback" aria-hidden="true">
                    {project.fallback}
                  </span>
                  <img
                    src={project.image}
                    alt={`Logotipo de ${project.title}`}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="project-info">
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-action">
                    {project.action}
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-line" />
          <p>
            Made with <span className="heart-icon">♥</span> by{" "}
            <span>Rafael Silva Zapien</span>
          </p>
          <span className="footer-note">
            © {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </main>
  );
}

export default App;
