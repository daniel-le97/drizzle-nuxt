<script setup lang="ts">
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

const randomize = () => testimonials.value.sort(() => Math.random() - 0.5)
</script>

<template>
  <div class="">
    <SectionHeader subtitle="What knowledge I'm about to unleash on your fragile mind." title="Find out more content in our Blog" />
    <div class=" flex my-5 items-center justify-center">
      <button class="btn  m-4 " @click="randomize">
        Click Me!
      </button>
    </div>
    <div  class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="t in testimonials" :key="t.username" class="flex h-full flex-col">




     <figure><img src="https://picsum.photos/seed/picsum/400/200" alt="Shoes" /></figure>
        <div class=" bg-base-100   hover:bg-[hsl(var(--nf))] duration-300 ease-linear group">

          <div class=" card-body ">

            <p class="text-neutral-content font-bold">
              {{ t.username }}
            </p>

              <p class="text-neutral-content">
                {{ t.comment }}
              </p>

          </div>

        </div>
      </div>
      <div v-auto-animate />
    </div>
  </div>
</template>

<style></style>
