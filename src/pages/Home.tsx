import { useEffect, useRef } from "react"
// components
import Hero from "../components/home/Hero"
import Plan from "../components/home/Plan"
import QA from "../components/home/QA"
import SignUp from "../components/home/SignUp"

export default () => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    mainRef.current!.style.marginTop = `${-1 * document.querySelector("header")!.offsetHeight}px`
  }, [])

  return (
    <main ref={mainRef}>
      <Hero />
      <Plan />
      <QA />
      <SignUp />
    </main>
  )
}