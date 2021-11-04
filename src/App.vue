<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useCounterStore} from "./store/useCounter";

const main = useCounterStore();

const {counter, name} = storeToRefs(main);

</script>

<template>
  <h3>Hellow World</h3>
  <h4> {{ counter }}</h4>
  <button @click="main.addOne">Click me</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
