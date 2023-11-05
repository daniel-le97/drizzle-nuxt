<script setup lang="ts">
const socials = [
  {
    image: 'https://avatars.githubusercontent.com/u/107594367?s=400&u=279c4a706755639789d6b825966e54161df0c7aa&v=4',
    name: 'Tung Le',
    github: 'https://github.com/TungLe0319',
    linkedIn: 'https://www.linkedin.com/in/tung-le0319/',

  },
  {
    image: 'https://avatars.githubusercontent.com/u/107774403?v=4',
    name: 'Daniel Le',
    github: 'https://github.com/daniel-le97',
    linkedIn: 'https://www.linkedin.com/in/daniel-le97/',

  },

]
</script>

<template>
  <footer class="bg-neutral ">
    <div class="w-full pt-10 flex items-center justify-center bg-neutral">
      <div class="md:w-2/3 w-full px-4 flex flex-col">
        <div class="md:flex">
          <h1 class="text-6xl font-bold w-full md:w-1/2 text-neutral-content">
            Thank you for checking out our app. Get in touch with us.
          </h1>
          <div class="w-full md:w-1/2 footer-section flex justify-center flex-col items-center">
            <div v-for="s in socials" class="mt-4 flex">
              <NuxtImg
                :src="s.image" :alt="s.name" height="60"
                width="60" class="rounded-full"
              />
              <div class="ml-5 flex gap-5 items-center">
                <a :href="s.linkedIn">
                  <NuxtImg src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" width="30" height="30" />
                </a>
                <a :href="s.github">
                  <NuxtImg
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-and-logos-11%2F32%2FLogo_Github-512.png&f=1&nofb=1&ipt=6cc9a130a9bb53997e07157eac5064ae54cdf9af88484f7a3e634e9bf6cf5f54&ipo=images"
                    alt="" width="30" height="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-8 flex-col md:flex-row md:justify-center md:text-center">
          <p class="w-full md:w-2/3  text-neutral-content">
            If you want to contact us the best way is to connect with us on
            LinkedIn and message us!
          </p>
        </div>
        <div class="flex flex-col">
          <div class="flex mt-24 mb-5 flex-row justify-between items-end">
            <div class="hidden md:block">
              <NuxtImg src="/Logo.png" alt="" width="80" class="rounded-xl " />
            </div>
            <NuxtLink to="/" class="link text-neutral-content" active-class="active-link">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="link text-neutral-content" active-class="active-link">
              About
            </NuxtLink>
            <nuxt-link to="/account" class="link text-neutral-content" active-class="active-link">
              Account
            </nuxt-link>
            <nuxt-link to="/contact" class="link text-neutral-content" active-class="active-link">
              Contact
            </nuxt-link>
          </div>
          <hr class="border-gray-600">
          <h1 class="text-center  my-10 text-neutral-content">
            © Lorem ipsum dolor sit.
          </h1>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {

  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?auto=format&fit=crop&q=80&w=1311&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);

  background-position: top;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.footer-section {
  flex: 1;
}

.link {
  width: fit-content;
  height: fit-content;

  @media only screen and (max-width: 768px) {
    font-size: 16px !important;
  }
}
</style>
