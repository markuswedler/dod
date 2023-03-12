import { useEffect, useRef, useState } from "react"

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState(false)
  const menuBtn = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(menu){
      document.body.style.overflow = "hidden"
    }
    else{
      menuBtn.current!.checked = false
      document.body.style.overflow = "unset"
    }
  }, [menu])

  return (
    <header ref={headerRef}>
      <div className="bg" />
      <div className="wrapper">
        <a  className="logo" href="/"></a>
        <div className="menuBtn">
          <input ref={menuBtn} type="checkbox" id="menuBtn" onChange={(e)=>{setMenu(e.target.checked)}} />
          <label htmlFor="menuBtn" />
        </div>
        <nav className={menu? "": "hidden"}>
          <ul></ul>
          <ul>
            <li><a href="/" onClick={()=>{setMenu(false)}}>Главная</a></li>
            <li><a href="#plan" onClick={()=>{setMenu(false)}}>Программа мероприятий</a></li>
            <li><a href="#qa" onClick={()=>{setMenu(false)}}>Вопросы</a></li>
            <li><a href="#contact" onClick={()=>{setMenu(false)}}>Контакты</a></li>
          </ul>
          <ul>
            <li><a target="_blank" href="https://vk.com/fefudvfu" className="vk" /></li>
            <li><a target="_blank" href="https://t.me/fefudvfu" className="tg" /></li>
            <li><a target="_blank" href="https://ok.ru/group/68737064632375" className="ok" /></li>
            <li><a target="_blank" href="https://rutube.ru/channel/23787464/" className="rt" /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
 
export default Header