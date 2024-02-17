import errorIcon from '../../assets/images/error-icon.png'
import s from './Error.module.css'

function ErrorBlock() {
  return (
    <div className={s.errorBlock}>
        <img className={s.errorIcon} src={errorIcon} alt="Error icon" />
        <h2>Error! Something went wrong.</h2>
        <p>Please reload the page!</p>
    </div>
  )
}

export default ErrorBlock