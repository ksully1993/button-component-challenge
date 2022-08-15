import '../styles/Button.css';
import { Button } from '@material-ui/core';

const ButtonComp = ({ color, variant, size, disabled, disableShadow, startIcon, endIcon, iconName}) => {

  const colorText = `${color?'color=':''}${color?'"' + color + '" ':''}`
  const variantText = `${variant?'variant=':''}${variant?'"' + variant + '" ':''}`
  const sizeText = `${size?'size=':''}${size?'"' + size + '" ':''}`
  const iconText = `${startIcon? 'startIcon="'+ iconName + '"' : endIcon ? 'endIcon="'+ iconName + '"': ''}`
  const text = `<Button ${colorText}${variantText}${sizeText}${iconText}${disabled?'disabled':''}${disableShadow?'disableShadow':''}/>`
  
  return (
    <div>
      <pre>{text}</pre>
      <Button 
        color={color?color:'primary'}
        variant={variant?variant:'contained'} 
        size={size?size:'medium'} 
        disabled={disabled}
        disableElevation={disableShadow}
        startIcon={startIcon}
        endIcon={endIcon}
      >Default</Button>
    </div>
  )
  }

export default ButtonComp;

