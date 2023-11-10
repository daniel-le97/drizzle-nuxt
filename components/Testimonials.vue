<script setup lang="ts">
import SectionHeader from './globals/SectionHeader.vue'

const testimonials = ref([
  {
    username: 'KENZIE EDWARDS',
    image: 'https://i.pravatar.cc/150?img=1',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. , accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.1',
  },
  {
    username: 'SYTHER',
    image: 'https://i.pravatar.cc/150?img=5',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non5',
  },
  {
    username: 'PIKACHU PIKA',
    image: 'https://i.pravatar.cc/150?img=3',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem.3',
  },
  {
    username: 'CLOUD STRIFE',
    image: 'https://i.pravatar.cc/150?img=4',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non.4',
  },
  {
    username: 'TINA LOCKHEART',
    image: 'https://i.pravatar.cc/150?img=2',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, tempora!2',
  },

  {
    username: 'COLEN MERIAL',
    image: 'https://i.pravatar.cc/150?img=6',
    comment: 'Lorem ipsum dolor sit amet consectetur.6',
  },
  {
    username: 'THEO VAN',
    image: 'https://i.pravatar.cc/150?img=50',
    comment: 'Lorem ipsum.7',
  },
  {
    username: 'SPONGEBOB',
    image: 'https://i.pravatar.cc/150?img=34',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil  accusantium distinctio ea autem eligendi maiores natus dolorem.8',
  },
  {
    username: 'Sephiroth',
    image: 'https://i.pravatar.cc/150?img=45',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non.  sit amet consectetur 9',
  },

])

// function randomize() {
//   setInterval(() => {
//     const randomIndex1 = Math.floor(Math.random() * testimonials.value.length)
//     const randomIndex2 = Math.floor(Math.random() * testimonials.value.length)

//     // Move the element at randomIndex1 to randomIndex2
//     const movedItem = testimonials.value.splice(randomIndex1, 1)[0]
//     testimonials.value.splice(randomIndex2, 0, movedItem)
//   }, 5000) // 3000 milliseconds = 3 seconds
// }
// randomize()
</script>

<template>
  <div class="">
    <SectionHeader subtitle="Joke This is all made up." title="What people are saying." />

    <div  class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="t in testimonials" :key="t.username" class="card bg-base-100 p-0.5 h-fit  glass  ">
        <div class="p-4 card bg-neutral shadow-xl h-full hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">
          <div class="flex items-center space-x-4 justify-start mb-4">
            <div
              class="avatar p-0.5 bg-accent shadow-md mask mask-hexagon scale-150 -translate-x-4 -translate-y-4 duration-300"
            >
              <div class="w-12 mask mask-hexagon">
                <NuxtImg :src="t.image" :modifiers="{ grayscale: true, tint: '#00DC82' }" />
              </div>
            </div>
            <p class="text-neutral-content font-bold">
              {{ t.username }}
            </p>
          </div>
          <div class="flex flex-col space-y-2 text-start">
            <p class="text-neutral-content ">
              <Icon name="mdi:format-quote-open" class="text-2xl text-accent" />   {{ t.comment }}
            </p>
          </div>
        </div>
      </div>
      <div v-auto-animate />
    </div>
  </div>
</template>

<style></style>
