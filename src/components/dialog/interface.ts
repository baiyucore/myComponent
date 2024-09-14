import type { Ref } from "vue";

export interface DialogContext{
  open : Ref<boolean>
  scrollY: Ref<number>
  changeOpen : ()=>void
  changeClose : ()=>void
}