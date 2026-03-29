import { SignUp } from "@clerk/clerk-react";

const Signup: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <SignUp routing="path" path="/signup" />
    </div>
  );
};

export default Signup;