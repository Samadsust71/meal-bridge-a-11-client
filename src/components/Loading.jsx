

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-1 min-h-[calc(100vh-576px)] my-10">
      <span className="loading loading-spinner loading-lg"></span>
      <p className="text-2xl">Loading...</p>
    </div>
  );
};

export default Loading;
