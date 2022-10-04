import { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { filterEmojis } from "../../utils/filterEmojis";
import EmojisBox from "../EmojisBox/EmojisBox";
import Empty from "../Empty/Empty";
import styleEmojis from './Emojis.module.css'

let Emojis = ({emojisData,searchText}) => {
  const [filteredEmojis,setFilteredEmojis] = useState([]);
  useEffect(() => {
    setFilteredEmojis(filterEmojis({
      emojisData : emojisData,
      searchText : searchText
    }))
  },[emojisData,searchText])
  if(filteredEmojis.length > 0){
    return(
      <div className={styleEmojis.emojis__grid}>
        {filteredEmojis.map((data,index) => {
          return(
            <EmojisBox key={index} title={data.title} symbol={data.symbol} />
          )
        })}
      </div>
    )
  }else{
    return(
      <Empty text="Maaf, Pencarian yang anda cari tidak ada. Coba cari dengan kata kunci lain" />
    )
  }
}
Emojis.propTypes = {
  emojisData : PropTypes.array,
  searchText : PropTypes.string
}
export default Emojis;