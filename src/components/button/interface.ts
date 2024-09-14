export interface Button{
  type ? : Buttontype,
}

type Buttontype = 'submit' | 'button'

export interface ButtonProps{
  defaulttype: 'button'
}