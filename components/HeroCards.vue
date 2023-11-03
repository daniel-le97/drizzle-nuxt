<template>
  <div ref="target" class="absolute z-50 -bottom-44 w-4/5 flex justify-center">
    <div class="card h-96">
      <div class="card-body flex-row space-x-4 items-center justify-center p-4">
        <Transition>
          <div
            v-if="targetIsVisible"
            class="card w-1/3 h-full glass text-black shadow-xl"
          >
            <div class="card-body">
              <img
                src="https://imgs.search.brave.com/H-lJ3BpWOxay8dqqBF5qIjMeRk2AKZCwa09lkFZymPw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wMzY1LmdpdGxh/Yi5pby9udXh0anMt/Mi44LlgtZG9jL2Vu/L2xvZ29zL251eHQu/c3Zn.svg"
                alt=""
                class="w-16 h-16"
              >
              <h2 class="card-title">
                The Intuitive Vue Framework
              </h2>
              <p>
                Make web development intuitive and powerful. <br>
                Create performant and production-grade full-stack web apps and
                websites with confidence.
              </p>
            </div>
          </div>
        </Transition>
        <Transition>
          <div
            v-if="targetIsVisible"
            class="card w-1/3 h-full glass text-black shadow-xl"
          >
            <div class="card-body">
              <img
                src="https://pbs.twimg.com/profile_images/1710017636166193152/7aUeiYMx_400x400.jpg"
                alt=""
                class="w-16 h-16 rounded-full"
              >
              <h2 class="card-title">
                Headless TypeScript ORM with a head
              </h2>
              <p>
                Drizzle ORM is a headless TypeScript ORM with a head 🐲 <br>

                It looks and feels simple, lets you do things your way, and is
                there when you need it.
              </p>
            </div>
          </div>
        </Transition>
        <Transition>
          <div
            v-if="targetIsVisible"
            class="card w-1/3 h-full glass text-black shadow-xl"
          >
            <div class="card-body">
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt=""
                class="w-16 h-16 rounded-full"
              >
              <h2 class="card-title">
                A utility-first CSS framework
              </h2>
              <p>
                Rapidly build modern websites without ever leaving your HTML.
                <br>
                packed with classes like flex, pt-4, text-center and rotate-90
                that can be composed to build any design.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  }
)
</script>

<style>

</style>
