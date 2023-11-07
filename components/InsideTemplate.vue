<script setup lang="ts">
import SectionHeader from './Global/SectionHeader.vue';


const sections = [
  {
    title: 'Building on solid foundations',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1489465033131-30f7e2025f68?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'Enhanced Module Integration',
        content: 'Experience seamless integration of some of the most popular Nuxt Modules and other essential libraries, opening up a world of possibilities for your project.',
      },
      {
        header: 'Drizzle ORM: Beyond Prisma',
        content: 'The Prisma alternative, Meet Drizzle, your lightweight, high-performance TypeScript ORM designed with developers in mind. Discover a new level of development efficiency.',
      },
      {
        header: 'Tailwind CSS for Rapid Styling',
        content: 'Elevate your design game with Tailwind CSS, the beloved utility-first CSS framework. Achieve stunning and consistent styling while speeding up your development process.',
      },

    ]
  },
  {
    title: 'Design Flexibility: Layouts, Colors, Customization',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'Unleash Your Creativity',
        content: `Enjoy an extensive range of customization options, effortlessly tailoring the template to your brand's identity and unique requirements. Ensure your website stands out and functions precisely the way you want.`,
      },
      {
        header: 'Elevate with Daisy UI',
        content: `Take your web design to new heights with the Daisy UI Component Library. Explore a collection of stunning, fully customizable components that seamlessly blend with your brand's identity. Say farewell to complex HTML class names and embrace beautifully crafted Tailwind components.`,
      },
      {
        header: '29 Inspiring Color Themes',
        content: 'Discover 29 amazing color themes to give your website a distinct and aesthetically pleasing look. Explore various design possibilities and transform your online presence with Daisy UI. Be sure to check it out on the NavBar ',
      },
      {
        header: 'Page Layout and Transitions',
        content: 'Our default Nuxt layout comes with a dynamic NavBar and active Nuxt router link classes, providing a seamless and engaging web navigation experience.',
      },
    ]

  },
  {
    title: 'Design Flexibility: Layouts, Colors, Customization',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'Elevate User Engagement with Animation',
        content: `Enhance user interaction and engagement through captivating animations powered by Vueuse/Motion and Z-Animate plugins. Bring your app to life with subtle and effective motion effects.`,
      },
      {
        header: 'Elevate with Daisy UI',
        content: `Take your web design to new heights with the Daisy UI Component Library. Explore a collection of stunning, fully customizable components that seamlessly blend with your brand's identity. Say farewell to complex HTML class names and embrace beautifully crafted Tailwind components.`,
      },
      {
        header: '29 Inspiring Color Themes',
        content: 'Discover 29 amazing color themes to give your website a distinct and aesthetically pleasing look. Explore various design possibilities and transform your online presence with Daisy UI. Be sure to check it out on the NavBar ',
      },
  

    ]

  }
]



</script>

<template>
  <div>
    <SectionHeader title="Inside Template"
      subtitle="What this templates offers with the Power of Nuxt, Drizzle and Tailwind." />
    <div class="flex flex-col items-center justify-center space-y-24">
      <div v-for="(section, index) in sections" :key="section.title" class="flex items-center justify-center space-x-4">
        <div :class="index % 2 === 0 ? ' order-1' : ' order-0'" class=" w-1/2 flex items-center justify-center">
          <NuxtImg :src="section.image" alt="accent image" />
        </div>
        <div :class="index % 2 === 1 ? ' order-1' : ' order-0'" class=" w-1/2 flex flex-col p-5">
          <div class="text-2xl font-bold">
            {{ section.title }}
          </div>
          <div class="text-lg font-medium text-secondary">
            {{ section.subtitle }}
          </div>
          <ul class="mt-8 space-y-5">
            <li v-for="l in section.list" :key="l.header">
              <div class="flex items-start justify-start space-x-4">
                <div>
                  <Icon name="uil:check-circle" size="35" class=" text-info" />
                </div>
                <div>
                  <div class="text-xl font-semibold">
                    {{ l.header }}
                  </div>
                  <div class="opacity-80">
                    {{ l.content }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
