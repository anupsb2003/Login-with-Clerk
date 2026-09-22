import { UserButton, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={styles.page}>
      {/*  NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>⚡ Clerk Login</h2>

        <div style={styles.navLinks}>
          <span>Home</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>

        <UserButton afterSignOutUrl="/login" />
      </div>

      {/*  HERO */}
      <div style={styles.hero}>
        <div
          style={{
            ...styles.left,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(50px)",
          }}
        >
          <p style={styles.badge}>🚀 Hello {user?.firstName}</p>

          <h1 style={styles.title}>
            Build <span style={styles.gradient}>Beautiful</span>
            <br />
            Web Apps Faster ⚡
          </h1>

          <p style={styles.desc}>
            Create stunning interfaces with animations, authentication and
            modern UI — all in one place.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primary}>🚀 Get Started</button>
            <button style={styles.secondary}>🎬 Live Demo</button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div style={styles.right}>
          <div style={styles.glassCard}></div>
          <div style={styles.glassCard2}></div>
          <div style={styles.glow}></div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={styles.features}>
        <h2 style={styles.sectionTitle}>✨ Why People Love Us</h2>

        <div style={styles.grid}>
          <div style={styles.card}>⚡ Lightning Fast</div>
          <div style={styles.card}>🎨 Stunning UI</div>
          <div style={styles.card}>🔐 Secure Auth</div>
          <div style={styles.card}>🚀 Scalable</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(270deg, #020617, #0f172a, #020617)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 12s ease infinite",
    color: "#fff",
    padding: "40px 80px",
    fontFamily: "Inter, sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "60px",
    alignItems: "center",
  },

  logo: {
    fontWeight: "800",
    fontSize: "22px",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    color: "#9ca3af",
    cursor: "pointer",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "70vh",
  },

  left: {
    transition: "1s",
  },

  badge: {
    background: "rgba(139,92,246,0.2)",
    padding: "6px 12px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "10px",
  },

  title: {
    fontSize: "64px",
    fontWeight: "800",
    lineHeight: "1.2",
  },

  gradient: {
    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desc: {
    marginTop: "15px",
    color: "#9ca3af",
    maxWidth: "500px",
  },

  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "15px",
  },

  primary: {
    padding: "14px 28px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },

  secondary: {
    padding: "14px 28px",
    borderRadius: "12px",
    border: "1px solid #8b5cf6",
    background: "transparent",
    color: "#fff",
  },

  right: {
    position: "relative",
    flex: 1,
  },

  glassCard: {
    width: "220px",
    height: "140px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    position: "absolute",
    top: "20%",
    left: "30%",
    animation: "float 4s ease-in-out infinite",
  },

  glassCard2: {
    width: "180px",
    height: "120px",
    background: "rgba(139,92,246,0.2)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    position: "absolute",
    top: "50%",
    left: "60%",
    animation: "float 6s ease-in-out infinite",
  },

  glow: {
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent)",
    position: "absolute",
    top: "30%",
    left: "40%",
    filter: "blur(100px)",
  },

  features: {
    marginTop: "100px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },

  card: {
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    cursor: "pointer",
  },
};