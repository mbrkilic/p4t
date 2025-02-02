import { IoArrowForwardCircle } from "react-icons/io5";

function App() {
  

  return (
    <>
      <div className="mt-4 flex mx-auto flex-col justify-center items-center">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2018/10/Ice-Cube-Death-Certificate-album-cover-web-optimised-820.jpg"
          alt="cover"
          className=" w-[480px] rounded-md"
        />
        <h1 className="text-3xl font-bold">Pray for Turkey</h1>
        <h3 className="text-2xl mt-4">Album Listen</h3>
        {/*youtube sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4">
          <img
            src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Youtube</h2>
            <p className="text-gray-600 mb-2">
              Youtubedaki videolara ve albümlere erişebilirsiniz.
            </p>
          </div>
          <a href="https://www.youtube.com" target="_blank">
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>

        {/*spotify sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4">
          <img
            src="https://www.svgrepo.com/show/303356/spotify-logo.svg"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Spotify</h2>
            <p className="text-gray-600 mb-2">
              Spotifydaki şarkı ve albümlere erişebilirsiniz.
            </p>
          </div>
          <a href="https://www.youtube.com" target="_blank">
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>

        {/*bandcamp sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4">
          <img
            src="https://www.svgrepo.com/show/172824/bc-bandcamp-logo.svg"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Bandcamp</h2>
            <p className="text-gray-600 mb-2">
              Bandcampdaki videolara ve albümlere erişebilirsiniz.
            </p>
          </div>
          <a href="https://www.youtube.com" target="_blank">
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>

        {/*soundcloud sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4">
          <img
            src="https://www.svgrepo.com/show/354368/soundcloud.svg"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Soundcloud</h2>
            <p className="text-gray-600 mb-2">
              Soundclouddaki videolara ve albümlere erişebilirsiniz.
            </p>
          </div>
          <a href="https://www.youtube.com" target="_blank">
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>

        <h3 className="text-2xl mt-4">for Donation</h3>
        {/*afad sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4">
          <img
            src="https://www.svgrepo.com/show/246767/donation-heart.svg"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Donation - AFAD</h2>
            <p className="text-gray-600 mb-2">
              You can donate this heresadhubasujnaskmd.
            </p>
          </div>
          <a
            href="https://en.afad.gov.tr/earthquake-humanitarian-aid-campaign"
            target="_blank"
          >
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>

    
        

        {/*ahbap sec*/}
        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4">
          <img
            src="https://www.svgrepo.com/show/246767/donation-heart.svg"
            alt="logo"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-grow p-4">
            <h2 className="text-lg font-bold mb-2">Donation - AHBAP</h2>
            <p className="text-gray-600 mb-2">
              You can donate this heresadhubasujnaskmd.
            </p>
          </div>
          <a
            href="https://en.afad.gov.tr/earthquake-humanitarian-aid-campaign"
            target="_blank"
          >
            <IoArrowForwardCircle className="w-10 h-10"></IoArrowForwardCircle>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
