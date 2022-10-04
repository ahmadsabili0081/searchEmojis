import PropTypes from "prop-types"
import styleSearch from './Search.module.css'

let Search = ({onChange, value}) => {
  return(
    <input className={styleSearch.input} onChange={onChange} placeholder="Search Emoji..." value={value} />
  )
}
Search.propTypes = {
  onChange : PropTypes.func,
  value : PropTypes.string
}
export default Search

