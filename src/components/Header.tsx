const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <a className="logo" href="/"></a>
        <div className="menuBtn">
          <input type="checkbox" id="menuBtn" />
          <label htmlFor="menuBtn" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#plan">Программа мероприятий</a></li>
            <li><a href="#qa">Задать вопрос</a></li>
            <li><a href="#contact">Контакты</a></li>
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