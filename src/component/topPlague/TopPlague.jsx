import { useState } from 'react';
// import css
import './topPlague.css'
// impoort img
import img from '../../assets/images/RUS.jpeg'
import img1 from '../../assets/images/USA.png'
import img2 from '../../assets/images/UZB.jpeg'
const languages = [
  {
    id: 1,
    img: img2, 
    name: 'uzbek' 
  },
  {
    id: 2, 
    img: img1, 
    name: 'english' 
  },
  {
    id: 3, 
    img: img, 
    name: 'русский' 
  }
];


const TopPlague = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('русский');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className='topPlague'>
      <div className="container">
        <div className="topPlague_box">
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
                        <div key={lang.id} className="topPlague_language" onClick={() => handleLanguageSelect(lang.name)}>
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