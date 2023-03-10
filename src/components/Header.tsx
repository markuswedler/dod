import { useEffect, useRef, useState } from "react"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const menuBtn = useRef<any>()

  useEffect(()=>{
    if(menu){
      document.body.style.overflow = "hidden"
    }
    else{
      menuBtn.current.checked = false
      document.body.style.overflow = "unset"
    }
  }, [menu])

  return (
    <header>
      <div className="wrapper">
        <a  className={menu? "logo black": "logo"} href="/"></a>
        <div className="menuBtn">
          <input ref={menuBtn} type="checkbox" id="menuBtn" onChange={(e)=>{setMenu(e.target.checked)}} />
          <label htmlFor="menuBtn" />
        </div>
        <nav className={menu? "": "hidden"}>
          <ul></ul>
          <ul>
            <li><a href="#" onClick={()=>{setMenu(false)}}>Главная</a></li>
            <li><a href="#plan" onClick={()=>{setMenu(false)}}>Программа мероприятий</a></li>
            <li><a href="#qa" onClick={()=>{setMenu(false)}}>Задать вопрос</a></li>
            <li><a href="#contact" onClick={()=>{setMenu(false)}}>Контакты</a></li>
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