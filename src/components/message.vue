<template>
    <div class="mask"></div>
    <div class="message-box">
        <div>{{title}}</div>
        <div>
            <button style="margin:20px" @click="handleConfirm">確認</button>
            <button @click="handleCancel">取消</button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: String,
    handleConfirm: Function,
    handleCancel: Function
})
</script>
<style>
.message-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    background-color: white;
    border: 1px solid black;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    z-index: 9999;
}

.mask {
    z-index: 3000;
    background: #000;
    opacity: .8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
}
</style>