import { useUser, UserButton } from "@clerk/clerk-react";

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome {user?.firstName ?? "User"} 👋</h1>

      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>

      <div style={{ marginTop: "20px" }}>
        <UserButton afterSignOutUrl="/login" />
      </div>
    </div>
  );
};

export default Home;