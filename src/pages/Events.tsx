import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=>{
    axios.get('https://docs.google.com/spreadsheets/d/1Isc1nviUaSU6InZTlTDIpD-fPbM6Fi2tMfNJgMpcCbQ/edit#gid=0')
      .then(res => res.data)
      .then(data => {
        tableRef.current!.innerHTML = data
        let result = ""
        tableRef.current!.querySelectorAll('link').forEach(linkTag => result += linkTag.innerHTML)
        tableRef.current!.querySelectorAll('style').forEach(styleTag => result += "<style>" + styleTag.innerHTML + "</style>")
        result += tableRef.current!.querySelector('#waffle-grid-container')!.innerHTML
        tableRef.current!.innerHTML = result
      })
      .then(() => {
        tableRef.current!.querySelector("div")!.style.marginTop = `${-1 * tableRef.current!.querySelector("th")!.offsetHeight}px`
        tableRef.current!.querySelector("div")!.style.marginLeft = `${-1 * tableRef.current!.querySelector("th")!.offsetWidth}px`
      })
  }, [])

  return (
    <main ref={mainRef} className="wrapper">
      <div ref={tableRef} className="table"></div>
    </main>
  )
}