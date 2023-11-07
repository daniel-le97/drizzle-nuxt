<script setup lang="ts">
const sections = [
  {
    title: 'About Us',
    subtitle: 'Who we are',
    image: 'https://images.unsplash.com/photo-1682686578707-140b042e8f19?auto=format&fit=crop&q=80&w=1375&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `At [Your Company Name], we are passionate about technology and dedicated to delivering innovative solutions. As a team of software developers and IT specialists, we strive to push the boundaries of what's possible in the digital world.Our commitment to excellence and our love for all things tech drive us to provide cutting- edge services and products to our clients.
Lorem ipsum dolor sit amet, consectetur adipisicing elit.Alias, ipsam!`,
  },
  {
    title: 'The Mission',
    subtitle: 'What we want to accomplish',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Our Mission Our mission is to harness the power of technology to solve complex problems and make the world a better place. We are driven by the belief that the right software can transform businesses and improve lives. We aim to create solutions that are not only efficient but also user-friendly, ensuring a seamless experience for our clients and their customers.',
  },
  {
    title: 'What Sets us apart',
    subtitle: 'What we want to accomplish',
    image: 'https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `Technical Expertise: Our team comprises highly skilled software developers and IT specialists who excel in their respective fields. We keep up with the latest trends and technologies to provide the best solutions.
Innovation: We love staying on the cutting edge of technology.We're not afraid to think outside the box and find creative solutions to your challenges.
Customer - Centric Approach: We believe that our success is closely tied to the success of our clients.We work closely with you to understand your unique needs and tailor our services accordingly.
      Passion: Our love for technology is at the core of what we do.It's not just a job; it's our passion, and that passion shines through in our work.`,
  },
  {
    title: 'Our Services',
    subtitle: 'What we want to extend to you',
    image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `Software Development: We design and build custom software solutions that meet your business's specific needs.
IT Consultation: Our IT specialists provide expert guidance to help you make the right technology decisions for your business.
      Podcasts: We also enjoy sharing our knowledge and insights through our tech- focused podcasts, where we discuss the latest trends and developments in the industry.`,
  },

]
</script>

<template>
  <main class="text-base-content">
    <section v-for="(section, index) in sections" :key="section.title" class=" p-8 flex flex-col space-y-4 bg-base-100 ">
      <div class="flex">
        <div :class="index % 2 === 0 ? ' order-1' : ' order-0'" class=" w-1/2 flex items-center justify-center">
          <NuxtImg :src="section.image" alt="about image" />
        </div>
        <div :class="index % 2 === 1 ? ' order-1' : ' order-0'" class="w-1/2  flex flex-col space-y-6 p-10">
          <div class="text-5xl font-bold font-serif">
            {{ section.title }}
          </div>
          <div class="text-2xl font-bold text-accent font-sans">
            {{ section.subtitle }}
          </div>
          <p class="opacity-80 text-xl  ">
            Our Mission
            Our mission is to harness the power of technology to solve complex problems and make the world a better place.
            We are driven by the belief that the right software can transform businesses and improve lives. We aim to
            create solutions that are not only efficient but also user-friendly, ensuring a seamless experience for our
            clients and their customers.
          </p>
        </div>
      </div>
    </section>

    <TemplateBanner />
  </main>
</template>

<style></style>
