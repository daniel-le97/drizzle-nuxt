<script setup lang="ts">
const { session } = useAuth()
const user = session?.value?.user
</script>

<template>
  <main class="   items-center justify-center flex">

    <section class="relative   mt-52  ">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-neutral w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center" />
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-accent">22</span><span class="text-sm text-accent">Friends</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-accent">10</span><span class="text-sm text-accent">Photos</span>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-accent">89</span><span class="text-sm text-accent">Comments</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex-col mt-12 flex items-center justify-center space-y-6">
              <div class="avatar">
                <div class="w-64 mask mask-hexagon">
                  <img :src="session?.user?.image ?? ''" :alt="session?.user?.name ?? ''">
                </div>
              </div>

              <div class="text-4xl text-primary font-semibold leading-normal mb-2 btn btn-ghost ">
                {{ user?.name }}
              </div>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase btn btn-ghost text-primary">
                {{ user?.email }}
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione totam error quas rem quo suscipit mollitia eveniet sunt nobis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
</style>
