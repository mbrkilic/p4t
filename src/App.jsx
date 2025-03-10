import { useState } from 'react';
import { IoArrowForwardCircle } from "react-icons/io5";
import cover from './assets/cover.jpg'
import { useLanguage } from './context/LanguageContext';

function App() {
  const [showBandcampAlert, setShowBandcampAlert] = useState(false);
  const [showAppleAlert, setShowAppleAlert] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();
  
  const openLink = (url) => {
    if (url === "https://bandcamp.com") {
      setShowBandcampAlert(true);
      setTimeout(() => setShowBandcampAlert(false), 3000);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {showBandcampAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black/80 text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm">
            <p className="text-sm sm:text-base text-center">
              {language === 'en' ? 'Bandcamp link will be activated soon!' : 'Bandcamp linki en kısa sürede aktif olacak!'}
            </p>
          </div>
        </div>
      )}

      {showAppleAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black/80 text-white px-8 py-4 rounded-xl shadow-xl backdrop-blur-sm">
            <p className="text-sm sm:text-base text-center">
              {language === 'en' ? 'Apple Music link will be activated soon!' : 'Apple Music linki en kısa sürede aktif olacak!'}
            </p>
          </div>
        </div>
      )}

      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleLanguage}
          className="group relative overflow-hidden px-6 py-2 rounded-xl bg-white/80 hover:bg-white/90 shadow-lg backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:shadow-xl"
        >
          <span className="relative z-10 text-gray-800 font-medium tracking-wider text-sm">
            {language === 'en' ? 'TR' : 'EN'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </button>
      </div>
      
      <div className="flex mx-auto flex-col justify-center items-center w-full max-w-7xl px-4">
        <img
          src={cover}
          alt="cover"
          className="mt-6 hover:scale-110 w-full sm:w-[300px] md:w-[400px] lg:w-[480px] rounded-md"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">{translations.title}</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold">{translations.listenTitle}</h3>
        
        {/* Platform buttons - Update text content with translations */}
        <button
          onClick={() => openLink("https://www.youtube.com/playlist?list=PLonXT4gvRzrwk-a28p30UF_GlQLBxwrq4")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475700/youtube-color.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.youtube.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              {translations.youtube.description}
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*spotify sec*/}
        <button
          onClick={() => openLink("https://open.spotify.com/album/2zhBo8GUggjjSRvExMF97R?si=kqurshADQratpBa_p3PJqw")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/475684/spotify-color.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.spotify.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              {translations.spotify.description}
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*apple sec*/}
        <button
         onClick={() => openLink("https://music.apple.com/tr/album/pray-for-turkıye/1797034334?l=tr")}
          
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/349299/apple-music.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.appleMusic.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              {translations.appleMusic.description}
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*bandcamp sec*/}
        <button
          onClick={() => {
            setShowBandcampAlert(true);
            setTimeout(() => setShowBandcampAlert(false), 3000);
          }}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/172824/bc-bandcamp-logo.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.bandcamp.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              {translations.bandcamp.description}
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        {/*soundcloud sec
        <button
          onClick={() => openLink("https://soundcloud.com")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4"
        >
          <img src="https://www.svgrepo.com/show/382735/soundcloud-sound-cloud.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.soundcloud.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">
              {translations.soundcloud.description}
            </p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>

        */}

        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold">{translations.donationTitle}</h3>

         {/*ahbap sec*/}
         <button
          onClick={() => openLink("https://ahbap.org/bagis/dogal-afetler")}
          className="hover:scale-110 flex w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-[120px] justify-between items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 px-4 mb-4"
        >
          <img src="https://www.svgrepo.com/show/246767/donation-heart.svg" alt="logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover" />
          <div className="flex-grow p-4 text-left">
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.donation.ahbap.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">{translations.donation.ahbap.description}</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>
        
        {/*afad sec
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
            <h2 className="text-sm sm:text-md md:text-lg font-bold mb-2">{translations.donation.afad.title}</h2>
            <p className="text-xs sm:text-sm md:text-md text-gray-600 mb-2">{translations.donation.afad.description}</p>
          </div>
          <IoArrowForwardCircle className="object-cover w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
        </button>
*/}
       
      </div>
      
      <footer className="mt-6 text-center text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">
        coded by mbrkilic
      </footer>
    </div>
  );
}

export default App;