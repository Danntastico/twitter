import { AiOutlineTwitter, AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { IconContext, IconType } from 'react-icons'
import Button from 'components/Button'
import './MainLogin.scss'

const MainLogin = () => {
  const getIcon = (Icon: IconType, className?: string, style?: React.CSSProperties) =>  (
    <IconContext.Provider value={{className, style}}>
      <Icon/>
    </IconContext.Provider>
  )
  
  return (
    <div className='main'>
      <div className="main__content">
        {getIcon(AiOutlineTwitter, 'twitter-icon')}
        <h1>Happening now</h1>
        <div className='signbox'>
          <h2>Join Twitter today.</h2>
          <div className='signbox__join'>
            <Button variant='transparent'><p>{getIcon(FcGoogle, undefined, {fontSize:'20px', marginRight: '5px'})} Sign up with Google</p></Button>
            <Button variant='transparent'><p> {getIcon(AiFillApple, undefined, {fontSize:'20px', marginRight: '5px'})} Sign up with Apple</p></Button>
            <p className="divider">
              <span>or</span>
            </p>
            <Button>Sign up with phone or email</Button>
          </div>
          <div className='signbox__sign'>
            <h3>Already have an account?</h3>
            <Button variant='lightblue'>Sign in</Button>
          </div>
        </div>
      </div>
      <div className="main__banner">
        {getIcon(AiOutlineTwitter, 'banner-icon')}
      </div>
    </div>
  )
}

export default MainLogin