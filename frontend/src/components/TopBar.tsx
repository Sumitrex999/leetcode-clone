import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function TopBar() {
    const handleLogout = async () => {
    try {
        await signOut(auth);
        navigate("/signin");
    } catch (error) {
        console.error(error);
    }
};
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default TopBar;