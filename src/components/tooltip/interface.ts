import type { Ref } from "vue";

export interface TooltipBoolean{
  open: Ref<boolean>
  handleMouseOver: ()=> void
  handleMouseLeave: ()=> void
}
