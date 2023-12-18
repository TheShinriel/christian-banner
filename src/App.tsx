import "./App.css"
import Banner from "./Banner"

export default function App() {
  return (
    <>
      <h1>Test d'intégration</h1>

      <Banner />

      <div className="card">
        <p>
          Ma réponse au défi de{" "}
          <a href="https://www.linkedin.com/posts/christian-humbert-developpeur-web_je-veux-te-lancer-un-défi-avis-à-toi-activity-7141375181373022208-XrOt?utm_source=share&utm_medium=member_desktop">
            Post LinkedIn
          </a>
          .
        </p>
        <p>Même si je ne suis pas du tout intégrateur !</p>
      </div>
    </>
  )
}
