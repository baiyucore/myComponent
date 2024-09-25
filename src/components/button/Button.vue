<template>
  <div  class="Button"  :class="[variant]" >
    <slot >button</slot>
  </div>
  
</template>


<script setup lang="ts">

export interface Button{
  type ? : Buttontype,
  variant ?: Variant
}


type Variant = 'primary' 

type Buttontype = 'submit' | 'button'

const props = defineProps<Button>()
const variant = props.variant 

</script>

<style scoped>
.Button{
  height: 50px;
  width: 95px;
  border-width: 5px;
  cursor: pointer;
  border-radius: 10px; 
  font-size:15px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: rgba(245, 222, 179, 0.616);
  color: var(--text-color);
}
.primary{
  color: #000000;
  background-color: rgb(235, 94, 13);
}

.Button:hover{
  background-color: rgba(190, 190, 190, 0.575);
}
</style>