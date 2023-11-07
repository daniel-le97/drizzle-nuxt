<script setup lang="ts">
import SectionHeader from './Global/SectionHeader.vue';


const sections = [
  {
    title: 'Building on solid foundations',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1489465033131-30f7e2025f68?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'Amazing Modules',
        content: 'Benefiting from the performance and developer-friendly features of this modern static site generator.',
      },
      {
        header: 'Integrated Drizzle ORM',
        content: 'Ensure your website looks and functions consistently across various web browsers, delivering a seamless experience to all users.',
      },
      {
        header: 'Styled using Tailwind CSS',
        content: 'Facilitating rapid design and consistent styling with this highly popular utility-first CSS framework.',
      },

    ]
  },
  {
    title: 'Building on solid foundations',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'High level of customization',
        content: `Unlock a wealth of customization options to effortlessly tailor the template to your brand's identity and unique requirements, ensuring a distinct and efficient website.`,
      },
      {
        header: 'Daisy UI Component Library',
        content: `Elevate your web design with the Daisu UI Component Library. Experience stunning, customizable components that effortlessly match your brand's identity.Say goodbye to complex HTML class names and enjoy a selection of beautifully crafted tailwind components.`,
      },
      {
        header: 'Tired of just dark mode?',
        content: '29 amazing color themes for a distinct, aesthetically pleasing website. Explore design possibilities and transform your online presence with Daisy UI. Check it out on the NavBar component.',
      },
      {
        header: 'Page Layout and Transitions',
        content: 'Enhanced Page Layout and Transitions: Our default Nuxt layout features a dynamic NavBar and active Nuxt router links for seamless and engaging web navigation',
      },

    ]

  },
  {
    title: 'Extensive ways to customize to taste',
    subtitle: 'Gain the ease and advantage by incorporating Nuxt Modules',
    image: 'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    list: [
      {
        header: 'High level of customization',
        content: `Unlock a wealth of customization options to effortlessly tailor the template to your brand's identity and unique requirements, ensuring a distinct and efficient website.`,
      },
      {
        header: 'Daisy UI Component Library',
        content: `Elevate your web design with the Daisu UI Component Library. Experience stunning, customizable components that effortlessly match your brand's identity.Say goodbye to complex HTML class names and enjoy a selection of beautifully crafted tailwind components.`,
      },
      {
        header: 'Tired of just dark mode?',
        content: '29 amazing color themes for a distinct, aesthetically pleasing website. Explore design possibilities and transform your online presence with Daisy UI. Check it out on the NavBar component.',
      },
      {
        header: 'Page Layout and Transitions',
        content: 'Enhanced Page Layout and Transitions: Our default Nuxt layout features a dynamic NavBar and active Nuxt router links for seamless and engaging web navigation',
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
