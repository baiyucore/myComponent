import type { Ref } from "vue"

export interface TabProps{
  defaultValue: string
}

export interface TabContext{
  tabValue : Ref<string>,
  changeTab: (value:string) => void
}


export interface TabBarItemProps{
  value:string,
}

export interface TabContent{
  value:string,
}