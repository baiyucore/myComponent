import { inject } from "vue"
import type { TooltipBoolean } from "./interface"


export const TooltipInjectionKey = Symbol("tooltip")
export const useTooltipBoolean = ()=>{
  const Boolean = inject<TooltipBoolean>(TooltipInjectionKey)
  if(Boolean === undefined){
    throw new Error('TooltipContent & TooltipTrigger must be used within Tooltip')
  }
  return Boolean
}