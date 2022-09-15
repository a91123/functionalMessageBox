<template>
  <button @click="handleSubmit">點</button>
</template>
<script setup>
import createMessage from '../message'
const handleSubmit = () => {
  createMessage('第一個')
    .then(res => {
      console.log(res)
    })
}
</script>