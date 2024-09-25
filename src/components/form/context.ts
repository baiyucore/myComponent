import { inject } from "vue"
import type { FormContext, FormProps, FormTypeDate} from "./interface"



export const FormInjectionKey = Symbol("form")
export const FormItemInjectionKey= Symbol('formiteminput');
export const useFormContext = ()=>{
  const context = inject<FormContext<FormTypeDate>>(FormInjectionKey)
  if(context === undefined){
    throw new Error()
  }

  return context
}