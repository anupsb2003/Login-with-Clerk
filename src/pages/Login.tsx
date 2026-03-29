import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const { signIn, isLoaded, setActive } = useSignIn();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isLoaded) return null;

  const handleLogin = async () => {
    try {
      const res = await signIn.create({
        identifier: email,
        password,
      });

      if (res.status === "complete") {
        await setActive({ session: res.createdSessionId });
        navigate("/home");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message);
    }
  };

  const socialLogin = async (strategy: "oauth_google" | "oauth_apple") => {
  await signIn.authenticateWithRedirect({
  strategy,
  redirectUrl: "/sso-callback",
  redirectUrlComplete: "/home", 
});
};

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          style={styles.input}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.primaryBtn} onClick={handleLogin}>
          Login
        </button>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.divider}>OR</div>

        <button style={styles.socialBtn} onClick={() => socialLogin("oauth_google")}>
          Continue with Google
        </button>

        <button style={styles.socialBtn} onClick={() => socialLogin("oauth_apple")}>
          Continue with Apple
        </button>

        <p style={styles.footer}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

const styles: any = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  primaryBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#667eea",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  socialBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  },
  divider: {
    margin: "15px 0",
    fontSize: "12px",
    color: "#888",
  },
  footer: {
    marginTop: "15px",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "13px",
  },
};