import Link from "next/link";

const techniques = ["CBT", "SFBT", "Enhanced Skill Training", "Islamic Guidance by Scholars"];

const uniqueHighlights = [
  {
    title: "Supervised Observation",
    description: "Observation of real counselling under supervision to witness best practices in action."
  },
  {
    title: "Mentored Practicum",
    description: "Hands-on training with expert mentors who guide you through live client simulations."
  },
  {
    title: "Case Lab Intensives",
    description: "Dynamic case study discussions that ground theory in nuanced, faith-rooted realities."
  },
  {
    title: "Personal Style Lab",
    description: "Identify and refine your personal counselling style with reflective guidance and feedback."
  }
];

const skills = [
  "Empathy",
  "Advocacy",
  "Interpersonal Communication",
  "Deep Listening",
  "Cultural Competency",
  "Solution-Based Application"
];

const eligibility = [
  "Graduates of Bachelor's, Master's, or Advanced Psychology programs",
  "Humanities students with allied or supplementary Psychology papers",
  "Graduates of Level 1 Islamic Psychology Diploma"
];

export default function Page() {
  return (
    <main>
      <section className="section" style={{ position: "relative" }}>
        <div className="blur-orb blur-orb--green" />
        <div className="blur-orb blur-orb--peach" />
        <div className="glass-panel" style={{ padding: "clamp(2.6rem, 4vw, 4rem)" }}>
          <div className="hero-grid">
            <div>
              <span className="badge">Advanced Diploma</span>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
                  lineHeight: 1.1,
                  marginTop: "1.1rem",
                  marginBottom: "1.2rem"
                }}
              >
                Are You Ready to Elevate Your Islamic Counseling Practice?
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: "rgba(15, 61, 62, 0.75)",
                  maxWidth: "38rem"
                }}
              >
                Take your psychology expertise to the next level with immersive supervision, scholar-guided Islamic
                frameworks, and the leading toolkit of contemporary counselling techniques refined for Muslim contexts.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
                <Link href="#enrol" className="cta-button">
                  Secure Your Seat
                </Link>
                <Link href="#curriculum" className="secondary-button">
                  Explore Curriculum
                </Link>
              </div>
              <div className="stat-group" style={{ marginTop: "2.4rem" }}>
                <div className="stat-card">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Level 1 Student Satisfaction</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">12 Weeks</div>
                  <div className="stat-label">Intensive Diploma Journey</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">4</div>
                  <div className="stat-label">Signature Islamic Techniques</div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="glass-panel"
                style={{
                  padding: "2.2rem",
                  display: "grid",
                  gap: "1.2rem",
                  background: "rgba(255, 255, 255, 0.9)"
                }}
              >
                <div>
                  <h2 className="font-display" style={{ fontSize: "1.9rem", lineHeight: 1.3 }}>
                    Advanced Diploma in Islamic Counseling Techniques & Skills
                  </h2>
                  <p style={{ color: "rgba(15, 61, 62, 0.7)", marginTop: "0.8rem", lineHeight: 1.6 }}>
                    Integrate proven psychological modalities with spiritually grounded frameworks, guided by seasoned
                    counsellors and Islamic scholars.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "rgba(15, 61, 62, 0.75)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    Key Techniques
                  </h3>
                  <div className="pill-list" style={{ marginTop: "0.8rem" }}>
                    {techniques.map((technique) => (
                      <span key={technique}>{technique}</span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gap: "0.5rem",
                    padding: "1.2rem",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, rgba(50,116,109,0.1), rgba(244,162,97,0.15))",
                    border: "1px solid rgba(50, 116, 109, 0.15)"
                  }}
                >
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "rgba(15, 61, 62, 0.75)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    Level 1 Success Story
                  </p>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "rgba(15, 61, 62, 0.8)" }}>
                    Our foundational cohort rated the experience above 95% for depth, relevance, and transformative impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section" style={{ paddingTop: 0 }}>
        <div className="grid" style={{ gap: "2rem" }}>
          <div style={{ textAlign: "center", maxWidth: "56rem", margin: "0 auto" }}>
            <span className="badge" style={{ justifyContent: "center" }}>
              Why It Stands Apart
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                marginTop: "1rem",
                marginBottom: "1rem"
              }}
            >
              Experience the Signature Approach
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(15, 61, 62, 0.72)" }}>
              Immerse yourself in real-world counselling rooms, sharpen your intuition with guided reflection, and receive
              in-depth feedback from mentors who understand both the psychological and spiritual dimensions of healing.
            </p>
          </div>

          <div className="card-grid card-grid--two">
            {uniqueHighlights.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "rgba(15, 61, 62, 0.8)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="card-grid">
          <div className="card">
            <h3>Build Core Competencies</h3>
            <p style={{ color: "rgba(15, 61, 62, 0.75)", lineHeight: 1.6 }}>
              Graduate with a refined skillset that balances empathy, structure, and culturally attuned guidance.
            </p>
            <div className="pill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Course Blueprint</h3>
            <ul>
              <li>12-week immersive diploma with modular weekend intensives</li>
              <li>Weekly mentorship labs and supervised observation</li>
              <li>Integrated assignments blending theory with lived spiritual contexts</li>
            </ul>
          </div>
          <div className="card">
            <h3>Who Thrives Here</h3>
            <ul>
              {eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="enrol" className="section" style={{ paddingTop: 0 }}>
        <div
          className="glass-panel"
          style={{
            padding: "2.4rem",
            display: "grid",
            gap: "1.6rem",
            background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.88))"
          }}
        >
          <div>
            <span className="badge">Next Cohort Forming</span>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.7rem)", marginTop: "0.9rem", marginBottom: "0.6rem" }}
            >
              Step Into Compassionate, Faith-Aligned Practice
            </h2>
            <p style={{ color: "rgba(15, 61, 62, 0.75)", lineHeight: 1.7 }}>
              Ignite a counselling journey that honours both scientific rigour and spiritual wisdom. Seats are limited to
              preserve the mentorship experience.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="mailto:admissions@islamiccounselling.org" className="cta-button">
              Apply via Email
            </Link>
            <Link href="https://calendly.com" className="secondary-button">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <div className="footer-note">
        © {new Date().getFullYear()} Advanced Diploma in Islamic Counseling Techniques &amp; Skills. Guided by scholars and
        clinicians dedicated to holistic wellbeing.
      </div>
    </main>
  );
}
