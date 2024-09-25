<template>

<div class="card">
  <slot></slot>
</div>
</template>

<style scoped>
.card{
  height: auto;
  width: 200px;
  border-radius: 0.375rem; 
  border-width: 1px; 
  border-color: #d1d5db; 
  background-color: #ffffff; 
  padding: 0.75rem;
  color: #1f2937; 
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.5);

}
</style>