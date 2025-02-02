import { IoArrowForwardCircle } from "react-icons/io5";

function App() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="mt-6 flex mx-auto flex-col justify-center items-center ">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2018/10/Ice-Cube-Death-Certificate-album-cover-web-optimised-820.jpg"
          alt="cover"
          className="hover:scale-110 w-[480px] rounded-md"
        />
        <h1 className="text-3xl font-bold">Pray for Turkey</h1>
        <h3 className="text-2xl mt-4 font-semibold">Album Listen</h3>
        {/*youtube sec*/}
        <button
          onClick={() => openLink("https://youtube.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475700/youtube-color.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Youtube</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on YouTube.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        {/*spotify sec*/}
        <button
          onClick={() => openLink("https://spotify.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475684/spotify-color.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Spotify</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on Spotify.
            </p>
          </div>

          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        {/*bandcamp sec*/}
        <button
          onClick={() => openLink("https://bandcamp.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/172824/bc-bandcamp-logo.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Bandcamp</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on Bandcamp.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        {/*soundcloud sec*/}
        <button
          onClick={() => openLink("https://soundcloud.com")}
          className="hover:scale-110 flex w-[480px] h-[120px]  justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/382735/soundcloud-sound-cloud.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Soundcloud</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on SoundCloud.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        <h3 className="text-2xl mt-4 font-semibold">for Donation</h3>
        {/*afad sec*/}
        <button
          onClick={() =>
            openLink(
              "https://en.afad.gov.tr/earthquake-humanitarian-aid-campaign"
            )
          }
          className="hover:scale-110 w-[480px] h-[120px] justify-between flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/246767/donation-heart.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Donation - AFAD</h2>
            <p className="text-gray-600 mb-2">You can make a donation here.</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        {/*  <button
          onClick={() => openLink("https://bandcamp.com")}
          className="flex p-4 justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4 w-[480px] h-[120px]"
        >
          <div className="flex items-center">
            <img
              src="https://www.svgrepo.com/show/246767/donation-heart.svg"
              alt=""
              className="w-24 h-24 object-cover"
            />
            <h2 className="pl-4 flex items-center  text-lg font-bold mb-2">YouTube</h2>
            
          </div>
          <IoArrowForwardCircle className="w-[40px] h-[40px] ml-2" />
        </button>*/}

        {/*ahbap sec*/}
        <button
          onClick={() => openLink("https://ahbap.org/bagis/dogal-afetler")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4"
        >
          <img src="https://www.svgrepo.com/show/246767/donation-heart.svg" alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Donation - AHBAP</h2>
            <p className="text-gray-600 mb-2">You can make a donation here.</p>
          </div>

          <IoArrowForwardCircle className="object-cover w-[40px] h-[40px]" />
        </button>

        {/* <div className="w-[480px] mx-auto mt-10">
      <button className="flex items-center px-4 w-full py-4 text-white rounded-md bg-gray-400  hover:bg-gray-500 transition justify-between">
        Youtube
        <img src="https://www.svgrepo.com/show/303271/youtube-2-logo.svg" className='w-[40px]' alt="" />
      </button>
      <button className="flex items-center px-4 w-full py-4 text-white bg-gray-400 hover:bg-gray-500 transition justify-between">
        Soundcloud
        <img src="https://www.svgrepo.com/show/354368/soundcloud.svg" className='w-[40px]' alt="" />
      </button>
      <button className="flex items-center px-4 w-full py-4 text-white bg-gray-400 hover:bg-gray-500 transition justify-between">
        Bandcamp
        <img src="https://www.svgrepo.com/show/172824/bc-bandcamp-logo.svg" className='w-[40px]' alt="" />
      </button>
      <button className="flex items-center px-4 w-full py-4 text-white bg-gray-400 hover:bg-gray-500 transition justify-between">
        Spotify
        <img src="https://www.svgrepo.com/show/303356/spotify-logo.svg" className='w-[40px]' alt="" />
      </button>
    </div>  */}
      </div>
    </>
  );
}

export default App;
