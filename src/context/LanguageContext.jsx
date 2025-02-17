import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

export const translations = {
  en: {
    title: "Pray for Turkiye",
    listenTitle: "for Listen",
    donationTitle: "for Donation",
    releaseMessage: "Album will be released on February 21, 2025 (Estimated)",
    youtube: {
      title: "Youtube",
      description: "You can listen to the album on YouTube."
    },
    spotify: {
      title: "Spotify",
      description: "You can listen to the album on Spotify."
    },
    appleMusic: {
      title: "Apple Music",
      description: "You can listen to the album on Apple Music."
    },
    bandcamp: {
      title: "Bandcamp",
      description: "You can listen to the album on Bandcamp."
    },
    soundcloud: {
      title: "Soundcloud",
      description: "You can listen to the album on SoundCloud."
    },
    donation: {
      ahbap: {
        title: "Donation - AHBAP",
        description: "You can make a donation here."
      },
      afad: {
        title: "Donation - AFAD",
        description: "You can make a donation here."
      }
    }
  },
  tr: {
    title: "Pray for Turkiye",
    listenTitle: "Dinlemek için",
    donationTitle: "Bağış için",
    releaseMessage: "Albüm 21 Şubat 2025'te yayınlanacak (Tahmini)",
    youtube: {
      title: "Youtube",
      description: "Albümü YouTube'dan dinleyebilirsiniz."
    },
    spotify: {
      title: "Spotify",
      description: "Albümü Spotify'dan dinleyebilirsiniz."
    },
    appleMusic: {
      title: "Apple Music",
      description: "Albümü Apple Music'ten dinleyebilirsiniz."
    },
    bandcamp: {
      title: "Bandcamp",
      description: "Albümü Bandcamp'ten dinleyebilirsiniz."
    },
    soundcloud: {
      title: "Soundcloud",
      description: "Albümü SoundCloud'dan dinleyebilirsiniz."
    },
    donation: {
      ahbap: {
        title: "Bağış - AHBAP",
        description: "Buradan bağış yapabilirsiniz."
      },
      afad: {
        title: "Bağış - AFAD",
        description: "Buradan bağış yapabilirsiniz."
      }
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  return useContext(LanguageContext);
} 