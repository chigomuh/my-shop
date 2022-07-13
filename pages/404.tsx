import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404 Page Not Found" />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-xl text-center space-y-4">
          <div className="text-5xl font-bold">Not Found</div>
          <div className="font-thin">
            The requested page doesn&apos;t exist or you don&apos;t have access
            to it.
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
