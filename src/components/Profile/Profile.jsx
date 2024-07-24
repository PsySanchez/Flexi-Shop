import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <> </>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>{user?.name}</p>
    </div>
  );
}
