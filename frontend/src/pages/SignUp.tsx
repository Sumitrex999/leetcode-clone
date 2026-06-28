import{ useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSigUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
        }catch (error){
            console.error(error);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-sm rounded-lg bg-slate-800 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Sign Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-md border border-slate-600 bg-slate-700 p-3 text-white outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-md border border-slate-600 bg-slate-700 p-3 text-white outline-none focus:border-blue-500"
        />

        <button 
        onClick={handleSigUp}
        className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;