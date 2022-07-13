import Image from "next/image";

interface Props {
  handleSignUpTap: () => void;
  handleLoginTap: () => void;
}

const SignUpTap = ({ handleSignUpTap, handleLoginTap }: Props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-20 z-40"
        onClick={handleSignUpTap}
      ></div>
      <div className="absolute top-full left-1/2 w-96 h-max bg-white z-50 -translate-x-1/2 pb-8">
        <div className="absolute top-0 right-0 m-4 cursor-pointer hover:opacity-50">
          <Image
            src="/image/exit.svg"
            alt="exit-icon"
            width={32}
            height={32}
            onClick={handleSignUpTap}
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
                placeholder="First Name"
                autoFocus
              />
              <input
                type="password"
                className="w-full h-10 border border-black px-4"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="w-full h-10 border border-black px-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full h-10 border border-black px-4"
                placeholder="Password"
              />
              <div className="flex text-sm items-center">
                <div>
                  <Image
                    src="/image/notice.svg"
                    alt="notice-icon"
                    width={16}
                    height={16}
                  />
                  <b>Info</b>: Passwords must be longer than 7 chars and include
                  numbers.
                </div>
              </div>
              <div className="bg-black w-full h-10 text-white text-center flex items-center justify-center font-bold text-sm cursor-pointer">
                Sign Up
              </div>
              <div className="text-sm flex justify-center items-center">
                Do you have an account?&nbsp;
                <b
                  className="cursor-pointer hover:underline"
                  onClick={handleLoginTap}
                >
                  Log In
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpTap;
