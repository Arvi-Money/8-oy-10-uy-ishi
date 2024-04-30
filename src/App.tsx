import './App.css'
import img from './assets/add-square.svg'
import phone from './assets/image 13.svg'

function App() {

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
                <img src={img} alt="" />
                <h2>Shablon holatida saqlash</h2>
              </div>
            </div>
            <div className="message-text">
              <div className="languages">
                <div className="lang">
                  <h2>O'zbekcha</h2>
                </div>
                <div className="lang">
                  <h2>Русский</h2>
                </div>
                <div className="lang">
                  <h2>English</h2>
                </div>
              </div>
              <textarea name="" id="" placeholder='Habar matni...'></textarea>
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
