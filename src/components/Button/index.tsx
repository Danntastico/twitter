import './Button.scss'

type ButtonVariants = 'filled' | 'transparent' | 'lightblue'
interface ButtonProps {
  children?: string | React.ReactNode
  variant?: ButtonVariants
}

const Button = (props: ButtonProps): JSX.Element => {
  const {children, variant='filled' } = props
  return (
    <button className={variant}>{children}</button>
  )
}

export default Button
