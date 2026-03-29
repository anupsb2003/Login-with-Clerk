import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup: React.FC = () => {
  const { signUp, isLoaded, setActive } = useSignUp();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");

  if (!isLoaded) return null;

  const handleSignup = async () => {
    try {
      await signUp.create({ emailAddress: email, password });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      setError(err.errors?.[0]?.message);
    }
  };

  const handleVerify = async () => {
    try {
      const res = await signUp.attemptEmailAddressVerification({ code });

      if (res.status === "complete") {
        await setActive({ session: res.createdSessionId });
        navigate("/home");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message);
    }
  };

  const socialSignup = async (strategy: "oauth_google" | "oauth_apple") => {
    await signUp.authenticateWithRedirect({
  strategy,
  redirectUrl: "/sso-callback",
  redirectUrlComplete: "/home", 
});
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Create Account 🚀</h2>

        {!verifying ? (
          <>
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

            <button style={styles.primaryBtn} onClick={handleSignup}>
              Sign Up
            </button>

            <div style={styles.divider}>OR</div>

            <button style={styles.socialBtn} onClick={() => socialSignup("oauth_google")}>
              Signup with Google
            </button>

            <button style={styles.socialBtn} onClick={() => socialSignup("oauth_apple")}>
              Signup with Apple
            </button>
          </>
        ) : (
          <>
            <input
              style={styles.input}
              placeholder="Enter OTP"
              onChange={(e) => setCode(e.target.value)}
            />

            <button style={styles.primaryBtn} onClick={handleVerify}>
              Verify Email
            </button>
          </>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p style={styles.footer}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

const styles: any = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
  },
  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
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
    background: "#ff758c",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
  },
  socialBtn: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "#fff",
  },
  divider: {
    margin: "15px 0",
    fontSize: "12px",
    color: "#888",
  },
  footer: {
    marginTop: "15px",
  },
};