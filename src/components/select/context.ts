import { inject } from "vue";
import type { SelectContext } from "./interface";

export const SelectInjectionKey= Symbol("select");
export const useSelectContext = ()=>{
  const context = inject<SelectContext>(SelectInjectionKey)
  if(context ===  undefined){
    throw new Error('SelectTrigger & SelectContent & SelectItem must be within Select')
  }
  return context
}