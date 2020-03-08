<template>
  <button
    :class="$style.counterButton"
    data-test="increment"
    @click="increment"
  >
    increment
  </button>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
