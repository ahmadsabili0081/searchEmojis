import PropTypes from "prop-types"
import styleEmpty from './Empty.module.css'

let Empty = ({text}) => {
  return(
    <div className={styleEmpty.empty}>
      {text}
    </div>
  )
}
Empty.propTypes = {
  text : PropTypes.string.isRequired,
}
export default Empty;