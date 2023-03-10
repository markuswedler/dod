const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrapper">
        <h1>Контакты приемной комиссии</h1>
        <ul className="grid">
          <li className="left">
            <a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0"}}>Yandex Maps</a>
            <a href="https://yandex.com/maps/11409/primorsky-krai/house/kampus_dalnevostochnogo_federalnogo_universiteta_ks/ZUoHaA9pTU0HVUJuYGJxc3hgZgg=/?ll=131.895853%2C43.024252&utm_medium=mapframe&utm_source=maps&z=18.67" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Kampus Dalnevostochnogo federalnogo universiteta, кE — Yandex Maps</a>
            <iframe src="https://yandex.com/map-widget/v1/?ll=131.895853%2C43.024252&mode=whatshere&whatshere%5Bpoint%5D=131.894398%2C43.024317&whatshere%5Bzoom%5D=15&z=15" allowFullScreen={true}></iframe>
          </li>
          <li className="center">
            <div className="item">
              <h4>Адрес</h4>
              <p>690922, Приморский край, г.&nbsp;Владивосток, о.&nbsp;Русский, п.&nbsp;Аякс,&nbsp;10</p>
            </div>
            <div className="item">
              <h4>Телефон</h4>
              <a href="tel:8(423)265-24-29">8 (423) 265-24-29</a>
            </div>
            <div className="item">
              <h4>Почта</h4>
              <a className="email" href="mailto:rectorat@dvfu.ru">rectorat@dvfu.ru</a>
            </div>
            <div className="item flex-cont">
              <div className="item">
                <h4>Социальные сети</h4>
                <div className="links">
                  <a target="_blank" href="https://vk.com/fefudvfu" className="vk" />
                  <a target="_blank" href="https://ok.ru/group/68737064632375" className="ok" />
                  <a target="_blank" href="https://rutube.ru/channel/23787464/" className="rt" />
                </div>
              </div>
              <div className="item">
                <h4>Чат-бот в Telegram</h4>
                <div className="links">
                  <a target="_blank" href="https://t.me/fefudvfu" className="tg" />
                </div>
              </div>
            </div>
            <div className="item">
              <h4>Режим работы</h4>
              <p>Пн-Пт: 09:00-18:00</p>
              <p>Сб-Вс: выходные</p>
            </div>
          </li>
          <li className="right">
            <a target="_blank" href="https://kraizemli.ru/vtour/dvfu/index.php">3D-тур по кампусу</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
 
export default Footer