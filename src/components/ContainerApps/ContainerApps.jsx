import styleContainer from './ContainerApps.module.css'
import PropTypes from "prop-types"
let ContainerApps = (props) => {
  return(
    <div className={styleContainer.containerApps}>
      {props.children}
    </div>
  )
}
ContainerApps.propTypes= {
  children : PropTypes.node
}
export default ContainerApps