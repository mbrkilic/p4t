import { IoArrowForwardCircle } from "react-icons/io5";
import { bandcamp } from "./assets/bandcamp.svg";
import { donation } from "./assets/donation.svg";
import { soundcloud } from "./assets/soundcloud.svg";
import { spotify } from "./assets/spotify.svg";
import { youtube } from "./assets/bandcamp.svg";

function App() {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="mt-4 flex mx-auto flex-col justify-center items-center ">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2018/10/Ice-Cube-Death-Certificate-album-cover-web-optimised-820.jpg"
          alt="cover"
          className=" w-[480px] rounded-md"
        />
        <h1 className="text-3xl font-bold">Pray for Turkey</h1>
        <h3 className="text-2xl mt-4 font-semibold">Album Listen</h3>
        {/*youtube sec*/}
        <link
          onClick={() => openLink("https://youtube.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src={youtube} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Youtube</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on YouTube.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
        </link>

        {/*spotify sec*/}
        <button
          onClick={() => openLink("https://spotify.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src={spotify} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Spotify</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on Spotify.
            </p>
          </div>

          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
        </button>

        {/*bandcamp sec*/}
        <button
          onClick={() => openLink("https://bandcamp.com")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src={bandcamp} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Bandcamp</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on Bandcamp.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
        </button>

        {/*soundcloud sec*/}
        <button
          onClick={() => openLink("https://soundcloud.com")}
          className="hover:scale-110 flex w-[480px] h-[120px]  justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src={soundcloud} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Soundcloud</h2>
            <p className="text-gray-600 mb-2">
              You can listen to the album on SoundCloud.
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
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
          <img src={donation} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Donation - AFAD</h2>
            <p className="text-gray-600 mb-2">You can make a donation here.</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
        </button>

        {/*ahbap sec*/}
        <button
          onClick={() => openLink("https://ahbap.org/bagis/dogal-afetler")}
          className="hover:scale-110 flex w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4"
        >
          <img src={donation} alt="logo" className="w-24 h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-lg font-bold mb-2">Donation - AHBAP</h2>
            <p className="text-gray-600 mb-2">You can make a donation here.</p>
          </div>

          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px]" />
        </button>
      </div>
      
    </>
  );
}

export default App;
