const SignUp = () => {
  return (
    <section className="signup wrapper" id="signup">
      <h1>Запись на экскурсии</h1>
      <form>
        <div className="row row1">
          <div className="input-cont">
            <input type="checkbox" id="cb_1" />
            <label htmlFor="cb_1">Обзорные экскурсии по кампусу с заездом в гостиничный комплекс и S корпус</label>
          </div>
          <div className="input-cont">
            <input type="checkbox" id="cb_2" />
            <label htmlFor="cb_2">Центр поектной деятельности (сектор "Биотехники", совместно с ООО "Иннофрм-ДВ", демонстрация автоматизированных теплиц) (корпус C)</label>
          </div>
        </div>
        <div className="row row2">
          <div className="input-cont">
            <input type="checkbox" id="cb_3" />
            <label htmlFor="cb_3">Лабораторный корпус (корпус L)</label>
          </div>
          <div className="input-cont">
            <input type="checkbox" id="cb_4" />
            <label htmlFor="cb_4">Корпус M и медицинский центр</label>
          </div>
          <div className="input-cont">
            <input type="checkbox" id="cb_5" />
            <label htmlFor="cb_5">Лаборатории Политихнического института (корпус C)</label>
          </div>
        </div>
        <div className="row row3">
          <input type="text" placeholder="Имя" />
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="E-mail" />
          <div className="btn-cont">
            <button className="btn">Записаться</button>
          </div>
        </div>
        <div className="row row4">
          <div/>
          <div/>
          <div/>
          <div className="input-cont">
            <input type="checkbox" id="cb_accept" />
            <label htmlFor="cb_accept">Отправляя форму, я соглашаюсь с Политикой обработки персональных данных</label>
          </div>
        </div>
      </form>
    </section>
  )
}
 
export default SignUp