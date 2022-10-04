import PropTypes from "prop-types"
import StyleContainer from './Container.module.css'

let Container = (props) => {
  return(
    <div className={StyleContainer.container}>
      <div className={StyleContainer.container__wrapper}>
      {props.children}
      </div>
    </div>
  )
}
Container.propTypes = {
  children : PropTypes.node
}
export default Container;
