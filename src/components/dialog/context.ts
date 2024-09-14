import { inject } from "vue"
import type { DialogContext } from './interface';

export const DialogInjectionKey = Symbol("dialog")

export const useDialogContext= ()=>{
  const context = inject<DialogContext>(DialogInjectionKey)
  if(context === undefined){
    throw new Error('DialogContent & DiglogTrigger * DialogHeader muse be use within Dialog')
  }

  return context
}