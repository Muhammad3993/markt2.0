import { useEffect, useState } from 'react';
// import css
import './topPlague.css'
// impoort img
import img from '../../assets/images/RUS.jpeg'
import img1 from '../../assets/images/USA.png'
import img2 from '../../assets/images/UZB.jpeg'
import { useContextProvider } from '../../context/Context';
import { currencyApi } from '../../data/currencyApi';
const languages = [
  {
    id: 1,
    img: img2, 
    name: 'uzbek',
    lang : 'uz'
  },
  {
    id: 2, 
    img: img1, 
    name: 'english',
    lang : 'en'
  },
  {
    id: 3, 
    img: img, 
    name: 'русский',
    lang: 'ru'
  }
];


const TopPlague = () => {
  const { setLanguage, language } = useContextProvider();
  const [currency, setCurrency] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState('русский');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCurrency, setIsOpenCurrency] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };  
  
  const handleCurrencyToggle = () => {
    setIsOpenCurrency(!isOpenCurrency);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const getCurrency = async () => {
      const response = await currencyApi.getCurrencyApi(language);
      setCurrency(response)
    }
    getCurrency();
  }, [language])
  

  return (
    <div className='topPlague'>
      <div className="container">
        <div className="topPlague_box">
          {/* <div className="topPlague_languages" onClick={handleCurrencyToggle}>
            <div className="topPlague_language">
              <p data-text={selectedLanguage.slice(0, 2)}>{selectedLanguage}</p>
            </div>
            {
              isOpen &&
              (
                <div className="topPlague_languages_box">
                  {
                    languages.map(lang => (
                      selectedLanguage !== lang.name && (
                        <div key={lang.id} className="topPlague_language" 
                          onClick={() => {
                          handleLanguageSelect(lang.name)
                          setLanguage(lang.lang)
                          }}
                        >
                          <p>{lang.name}</p>
                      </div>
                      )
                    ))
                  }
              </div>)
            }
          </div> */}
          <p className='topPlague_current'>USD</p>
          <p className='topPlague_box_txt'>Any case. Any band. Any style you want.</p>
          <div className="topPlague_languages" onClick={handleSelectToggle}>
            <div className="topPlague_language">
              <div className="topPlague_language_img">
                <img src={languages.find(lang => lang.name === selectedLanguage).img} alt="" />
              </div>
              <p data-text={selectedLanguage.slice(0, 2)}>{selectedLanguage === 'uzbek' ? 'uzbek' : selectedLanguage === 'english' ? 'english' : 'русский'}</p>
            </div>
            {
              isOpen &&
              (
                <div className="topPlague_languages_box">
                  {
                    languages.map(lang => (
                      selectedLanguage !== lang.name && (
                        <div key={lang.id} className="topPlague_language" 
                          onClick={() => {
                          handleLanguageSelect(lang.name)
                          setLanguage(lang.lang)
                          }}
                        >
                          <div className="topPlague_language_img">
                            <img src={lang.img} alt="" />
                          </div>
                          <p>{lang.name}</p>
                      </div>
                      )
                    ))
                  }
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlague;