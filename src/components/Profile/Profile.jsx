import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <> </>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.name}</p>
    </div>
  );
}
