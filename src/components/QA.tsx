// react
import { useState } from "react"

const QA = () => {
  const questions = [
    "Как подготовиться к первому посещению вуза?",
    "Что интересного можно узнать на Дне открытых дверей?",
    "Как добраться?",
    "Как записаться на экскурсии?"
  ]
  const answers = [
    "Первое посещение университета часто вызывает волнение у абитуриентов, но не стоит переживать и волноваться, ведь у нас будет организован свободный доступ на кампус, чтобы легче сориентироваться смонтированы навигационные вывески, также наши волонтёры подскажут, где находятся аудитории, а руководство университета, сотрудники приёмной комиссии и преподаватели ответят на все интересующие вопросы по поступлению. Чтобы первое знакомство с университетом было максимально продуктивным заранее изучите программу Дня открытых дверей, запишитесь на экскурсии, постарайтесь посетить как можно больше мероприятий, не стесняйтесь задавать все интересующие вас вопросы, можете заранее их подготовить, смело берите информационные буклеты, знакомьтесь с инфраструктурой кампуса.",
    "День открытых дверей поможет получить больше информации об интересующих специальностях, узнать об особенностях поступления, пообщаться с преподавателями и сотрудниками приёмной комиссии, познакомиться с кампусом, а также посетить экскурсии по научным лабораториям, посетить мастер-классы, лектории от школ и институтов ДВФУ. Обо всех мероприятиях можно узнать из программы Дня открытых дверей.",
    "День открытых дверей пройдет в кампусе ДВФУ на о. Русском, вход для всех свободный. Добраться до университета можно на городском общественном транспорте до остановки «Кампус ДВФУ» (автобусы следующих маршрутов: 74, 76, 77, 15, 63, 29 д,), школьных автобусах для организованных групп, такси и личных автомобилях. Адрес кампуса ДВФУ — «ДВФУ кампус, о. Русский, пос. Аякс, 10».",
    "Для записи на экскурсии необходимо заполнить обязательные поля формы на сайте, выбрать удобное время и нажать кнопку «Записаться». Рекомендуем записываться заранее на те экскурсии, которые хотите посетить, а также не опаздывать к выбранному времени."
  ]
  const [questionsStates, setQuestionsStates] = useState<boolean []>(new Array(questions.length).fill(false))

  return (
    <section className="qa wrapper" id="qa">
      <h1>Часто задаваемые вопросы</h1>
      <ul>
        { questions.map((question, i) => (
            <li className={questionsStates[i]? "" : "hidden"} key={i}>
              <h3 className="question" onClick={()=>{
                let tmp = [...questionsStates]
                tmp[i] = !tmp[i]
                setQuestionsStates(tmp)
              }}>
                { question }
                <div className="sign"/>
              </h3>
              <div className="answer">{ answers[i] }</div>
            </li>
        )) }
      </ul>
    </section>
  )
}
 
export default QA