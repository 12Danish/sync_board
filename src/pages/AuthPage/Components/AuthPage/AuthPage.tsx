interface AuthPageProps {
    closeModal: () => void;
  }
  
  const AuthPage: React.FC<AuthPageProps> = ({ closeModal }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-lg z-50">
            <div className="bg-[#f5ebd3] p-8 rounded-2xl shadow-xl w-[400px] relative">
              {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-900 text-xl"
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">Sign in to Sync</h2>
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <div className="flex justify-center items-center w-full">
            <button className="bg-black text-white cursor-pointer font-semibold px-5 py-2 rounded-full transition duration-300 hover:scale-110">
                Continue
            </button>
            </div>
            <div className="flex justify-center items-center w-full my-4">
              <p>Or</p>
            </div>
            <div className="flex justify-center items-center w-full">
        <button className="flex items-center cursor-pointer p-3 border rounded-full transition duration-300 hover:scale-105">
            <img 
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
            alt="Google icon" 
            className="w-6 h-6 mr-2" 
            />
            <span className="font-semibold">Continue with Google</span>
        </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default AuthPage;
  