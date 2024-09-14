import { inject } from "vue"
import type { Button } from "./interface"

export const ButtonKey = Symbol("button")

export const useButtton = () =>{
  const Button = inject<Button>(ButtonKey)
  return Button
}