<template>
  <button
    :class="$style.counterButton"
    data-test="asyncIncrement"
    @click="asyncIncrement"
  >
    asyncIncrement
  </button>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" module src="./index.module.scss" />
