import { IoArrowForwardCircle } from "react-icons/io5";

function App() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="mt-6 flex mx-auto flex-col justify-center items-center w-full max-w-7xl px-4">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2018/10/Ice-Cube-Death-Certificate-album-cover-web-optimised-820.jpg"
          alt="cover"
          className="hover:scale-110 w-full sm:w-[300px] md:w-[400px] lg:w-[480px] rounded-md"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">Pray for Turkey</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold">Album Listen</h3>
        
        {/*youtube sec*/}
        <button
          onClick={() => openLink("https://youtube.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475700/youtube-color.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Youtube</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              You can listen to the album on YouTube.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*spotify sec*/}
        <button
          onClick={() => openLink("https://spotify.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475684/spotify-color.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Spotify</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              You can listen to the album on Spotify.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*apple sec*/}
        <button
          onClick={() => openLink("https://music.apple.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/349299/apple-music.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Soundcloud</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              You can listen to the album on Apple Music.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*bandcamp sec*/}
        <button
          onClick={() => openLink("https://bandcamp.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/172824/bc-bandcamp-logo.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Bandcamp</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              You can listen to the album on Bandcamp.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*soundcloud sec*/}
        <button
          onClick={() => openLink("https://soundcloud.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/382735/soundcloud-sound-cloud.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Soundcloud</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              You can listen to the album on SoundCloud.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold">for Donation</h3>
        
        {/*afad sec*/}
        <button
          onClick={() =>
            openLink(
              "https://en.afad.gov.tr/earthquake-humanitarian-aid-campaign"
            )
          }
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/246767/donation-heart.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Donation - AFAD</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">You can make a donation here.</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*ahbap sec*/}
        <button
          onClick={() => openLink("https://ahbap.org/bagis/dogal-afetler")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4"
        >
          <img src="https://www.svgrepo.com/show/246767/donation-heart.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">Donation - AHBAP</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">You can make a donation here.</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>
      </div>
    </>
  );
}

export default App;