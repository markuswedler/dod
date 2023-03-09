import { useRef, useState } from "react"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const menuBtn = useRef<any>()

  const closeMenu = () => {
    menuBtn.current.checked = false
    setMenu(false)
  }

  return (
    <header>
      <div className="wrapper">
        <a  className={menu? "logo black": "logo"} href="/"></a>
        <div className="menuBtn">
          <input ref={menuBtn} type="checkbox" id="menuBtn" onChange={(e)=>{setMenu(e.target.checked)}} />
          <label htmlFor="menuBtn" />
        </div>
        <nav className={menu? "": "hidden"}>
          <ul>
            <li><a href="#" onClick={closeMenu}>Главная</a></li>
            <li><a href="#plan" onClick={closeMenu}>Программа мероприятий</a></li>
            <li><a href="#qa" onClick={closeMenu}>Задать вопрос</a></li>
            <li><a href="#contact" onClick={closeMenu}>Контакты</a></li>
          </ul>
          <ul>
            <li><a href="/">X</a></li>
            <li><a href="/">X</a></li>
            <li><a href="/">X</a></li>
            <li><a href="/">X</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
 
export default Header