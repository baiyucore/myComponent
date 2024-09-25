import type { Ref } from "vue";

export interface SelectContext{
  selectValue : Ref<string>,
  changeSelect : (value:string)=> void
  open: Ref<boolean>
  changeOpen : (open :boolean)=>  void
}
export interface SelectProps{
  defaultValue:string,
}
export interface SelectItemProps{
  value :string,
}