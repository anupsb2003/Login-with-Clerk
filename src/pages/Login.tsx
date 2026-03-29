import { SignIn } from "@clerk/clerk-react";

const Login: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <SignIn routing="path" path="/login" />
    </div>
  );
};

export default Login;