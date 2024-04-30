import './App.css'
import { SyntheticEvent } from 'react'
import img from './assets/add-square.svg'
import phone from './assets/image 13.svg'
import { useState } from 'react'

interface LangT{
  id: string,
  value: string
}

function App() {
  const [phoneVal, setPhoneVal] = useState("");
  const [langId, setLangId] = useState<string>('uz')
  const [langs] = useState<LangT[]>([
    { id: "uz", value: "O'zbek" },
    { id: "ru", value: "Русский" },
    { id: "en", value: "English" },
  ]);

  const handleChange = (langId: string) => {
    setLangId(langId);
  };

  const handleAmount = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setPhoneVal(target.value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="text-side">
          <h1>Habarning ko'rinishi</h1>
          <div className="template">
            <h2>Shablon</h2>
            <select name="" id="">
              <option value="">Shablon</option>
            </select>
          </div>
            <div className="message-top">
              <h2>Habar</h2>
              <div className='save-template'>
                <img src={img} alt="" onClick={handleAmount}/>
                <h2>Shablon holatida saqlash</h2>
              </div>
            </div>
            <div className="message-text">
              <div className="languages">
                {langs.map((lang) => (
                <div
                  key={lang.id}
                  onClick={() => handleChange(lang.id)}
                  className="lang"
                  style={
                    langId === lang.id
                      ? { backgroundColor: "white", color: "rgb(0, 98, 255)" }
                      : {}
                  }
                >
                  {lang.value}
                  </div>
              ))}
              </div>
              <textarea name="" id="" 
               placeholder={
                phoneVal
                  ? phoneVal
                  : langId === "uz"
                  ? "Habar matni..."
                  : langId === "en"
                  ? "Message text..."
                  : "Текст сообщения..."
              }></textarea>
          </div>
        </div>
        <div className="phone-side">
          <img src={phone} alt="" />
        </div>
        </div>  
    </>
  )
}

export default App
