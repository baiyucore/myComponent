import { inject } from "vue"
import type { TabContext } from "./interface"

export const TabInjectionKey = Symbol("tab")

export const useTabContxt = ()=>{
  const context = inject<TabContext>(TabInjectionKey)
  if(context === undefined){
    throw new Error('TabBarItem & TabContent must be used within Tab')
  }
  return context

}