import Image from "next/image";

interface Props {
  handleLoginTap: () => void;
  handleSignUpTap: () => void;
}

const LoginTap = ({ handleLoginTap, handleSignUpTap }: Props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20 z-40"
        onClick={handleLoginTap}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white z-50 -translate-x-1/2 translate-y-1/2">
        <div className="absolute top-0 right-0 m-4 cursor-pointer hover:opacity-50">
          <Image
            src="/image/exit.svg"
            alt="exit-icon"
            width={32}
            height={32}
            onClick={handleLoginTap}
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/6">
            <div className="flex justify-center m-10">
              <Image
                src="/image/logo.svg"
                alt="vercel-icon"
                width={60}
                height={60}
              />
            </div>
            <form className="w-full space-y-4">
              <input
                type="text"
                className="w-full h-10 border border-black px-4"
                placeholder="Email"
                autoFocus
              />
              <input
                type="password"
                className="w-full h-10 border border-black px-4"
                placeholder="Password"
              />
              <div className="bg-black w-full h-10 text-white text-center flex items-center justify-center font-bold text-sm cursor-pointer">
                Log In
              </div>
              <div className="text-sm flex justify-center items-center">
                Don&apos;t have an account?&nbsp;
                <b
                  className="cursor-pointer hover:underline"
                  onClick={handleSignUpTap}
                >
                  Sign Up
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginTap;
