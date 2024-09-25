<template>

  <div>
    <Button @click="test">

    </Button>
  </div>

</template>

<script setup lang="ts">
import { Button } from '../button'; 
import { useFormContext } from './context';

const {submit,validate} = useFormContext()

const test = ()=>{
  if(validate()){
    submit()
  }else{
    console.log(1111)
  }
 
}

</script>