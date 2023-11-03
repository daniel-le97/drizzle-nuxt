<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const images = [
  'https://i.pravatar.cc',
  'https://i.pravatar.cc',
  'https://i.pravatar.cc',
  'https://i.pravatar.cc',
  'https://i.pravatar.cc',
]
const altText = 'Pizza'

const currentIndex = ref(0)
const interval = ref(null)

const currentImage = ref(images[currentIndex.value])

const carouselStyles = computed(() => {
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
  }
})

// Function to rotate to the next image
function rotateToNextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
  currentImage.value = images[currentIndex.value]
}

// Start the auto-rotation when the component is mounted
onMounted(() => {
  interval.value = setInterval(rotateToNextImage, 3000) // Change every 3 seconds
})

// Stop the auto-rotation when the component is unmounted
onUnmounted(() => {
  clearInterval(interval.value)
})
</script>

<template>
  <section class="my-44">
    <div class="text-4xl font-bold text-center my-2 gradient-text text-6xl">
      Testimonials
    </div>
    <div class="carousel carousel-center rounded-box   h-[500px]">
      <div v-for="i in 10" class="carousel-item flex-col items-center space-y-4  py-1  w-1/3  ">
        <div class="avatar ">
          <div class="w-24 mask mask-hexagon">
            <img src="https://i.pravatar.cc" alt="altText">
          </div>
        </div>
        <div class="   w-4/5 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate odit impedit ipsum totam in, tempora adipisci, quam maxime animi, vitae tempore tenetur vero rerum odio iste assumenda natus sunt at ea unde praesentium recusandae quaerat. Neque deleniti ratione voluptatum corporis labore amet quibusdam asperiores tenetur repudiandae. Quidem illum iste ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad delectus soluta nemo! Ipsum voluptatum repellendus pariatur labore ratione quis quae recusandae eligendi enim reiciendis! Dolore.
        </div>
      </div>
    </div>
  </section>
</template>
