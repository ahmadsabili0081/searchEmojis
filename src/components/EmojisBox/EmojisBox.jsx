import { useState,useEffect } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import style from "./EmojisBox.module.css"

let EmojisBox = ({title, symbol}) => {
  const [selected,setSelected] = useState(false);
  let handleClipBoard = () => {
    navigator.clipboard.writeText(symbol);
    setSelected(true)
  }
  // // setTimeout(() => {
  //   setSelected(false);
  // },600)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelected(false);
    },600)
    return () => clearTimeout(timer);
  },[selected])
  return(
    // classnames ini mempunyai 2 parameter
    <div onClick={handleClipBoard} className={classNames(style.emojisBox,{[style.selected] : selected})}>
      <p className={style.emojis} 
        // fungsi dari dangerously adalah  menghandle sebuah string untuk menjadi sebuah element html
          // yang dapat merender native di browser di Operating system tertentu 
        dangerouslySetInnerHTML={{
             // code point adalah membuat emoji tersebut menjadi hex code 
          __html : `&#${symbol.codePointAt(0)};`
        }}
      />
      <p className={style.emojisTitle}>{selected ? 'Copied!' : title}</p>
    </div>
  )
}
EmojisBox.propTypes = {
  title : PropTypes.string,
  symbol : PropTypes.string
}
export default EmojisBox;