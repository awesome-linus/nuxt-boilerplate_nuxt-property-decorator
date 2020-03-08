<template>
  <button
    :class="$style.counterButton"
    data-test="decrement"
    @click="decrement"
  >
    decrement
  </button>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
