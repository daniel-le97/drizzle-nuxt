<template>
  <div class="">
    <SectionHeader subtitle="Joke This is all made up." title="What people are saying." />
    <div class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="card bg-base-100 p-2 " v-for="t in testimonials">
        <div class="p-4 card bg-neutral shadow-xl h-full hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">
          <div v-motion-pop-visible :delay="100" class="flex items-center space-x-4 justify-start mb-4">
            <div class="avatar p-0.5 bg-accent shadow-md mask mask-hexagon scale-150 -translate-x-4 -translate-y-4 duration-300">
              <div class="w-12 mask mask-hexagon">
                <img :src="t.image" :alt="t.username" class="w-16 h-16 rounded-md ">
              </div>
            </div>

             <p v-motion-pop-visible :delay="100" class="text-neutral-content font-bold">{{ t.username }}</p>
          </div>
          <div class="flex flex-col space-y-2 text-start">

            <p v-motion-pop-visible :delay="100" class="text-neutral-content">{{ t.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    username: 'KENZIE EDWARDS',
    image: 'https://i.pravatar.cc/150?img=1',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.1',
  },
  {
    username: 'TINA LOCKHEART',
    image: 'https://i.pravatar.cc/150?img=2',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.2',
  },
  {
    username: 'PIKACHU PIKA',
    image: 'https://i.pravatar.cc/150?img=3',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.3',
  },
  {
    username: 'CLOUD STRIFE',
    image: 'https://i.pravatar.cc/150?img=4',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.4',
  },
  {
    username: 'SYTHER',
    image: 'https://i.pravatar.cc/150?img=5',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.5',
  },
  {
    username: 'COLEN MERIAL',
    image: 'https://i.pravatar.cc/150?img=6',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta quae velit modi quibusdam eos non, accusantium distinctio ea autem eligendi maiores natus dolorem. Similique.6',
  },

];

</script>


<style></style>
