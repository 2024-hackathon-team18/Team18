import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="fixed top-0 w-screen flex justify-center items-center">
      <div className="backdrop-blur-[4px] flex flex-row items-center justify-between py-2 px-3 w-[1200px] box-sizing-border">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        <div className="flex flex-row items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log In</button>
        </div>
      </div>
    </div>
  );
}
