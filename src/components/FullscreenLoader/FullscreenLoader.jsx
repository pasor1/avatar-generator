const fullscreenLoader = () => (
  <>
  <div className="fixed h-screen w-screen top-0 right-0 bg-black opacity-25">
  </div>
  <div className="fixed h-screen w-screen top-0 right-0 flex justify-center items-center p-2">
    <div className="loader">Loading...</div>  
  </div>
  </>
);

export default fullscreenLoader;