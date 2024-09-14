<script setup lang="ts">
import {Button} from './components/button'
import { ref } from 'vue'
import {icon} from './components/icon';
import { Tab,TabBar,TabBarItem,TabContent } from './components/tab';
import { Tooltip,TooltipTrigger, TooltipContent } from './components/tooltip';
import { Dialog,DialogContent,DialogHeader,DialogTrigger,DialogFooter } from './components/dialog/index';
let test = ref()
function onSubmit(event: Event){
  event.preventDefault()
  console.log(test.value)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input v-model="test"></input>
    <button type="submit">按钮</button>
    <Button class="Button1">按钮</Button>
  </form>
  
  <Tab defaultValue="Shacn">
      <!-- 这个是页头 -->
      <TabBar>
        <TabBarItem value="Arco" >字节</TabBarItem>
        <TabBarItem value="Shacn">开源</TabBarItem>
        <TabBarItem value="Matemial">谷歌</TabBarItem>
      </TabBar>
      <!-- 这个是内容 -->
      <TabContent  value="Arco">
        <div>Arco</div>
      </TabContent>
      <TabContent  value="Shacn">
        <div>Shacn</div>
      </TabContent>
      <TabContent value="Matemial">
        <div>Matemial</div>
      </TabContent>
    </Tab>

      <icon class="Icon">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </icon>
      <Tooltip>
        <TooltipTrigger>tooltip</TooltipTrigger>
        <TooltipContent >11111111111111111</TooltipContent>
      </Tooltip>
      
      <Dialog>
        <!-- 触发器 -->
        <DialogTrigger><Button>dialog</Button></DialogTrigger>
        <!-- 内容 -->
        <DialogContent>
          <DialogHeader>header</DialogHeader>
          content
          <DialogFooter>footer</DialogFooter>
        </DialogContent>
      </Dialog>
</template>


<style scoped>
.Button1{
  font-size:20px;
}
.Icon{
  width: 50px;
  height: 50px;
}
</style>