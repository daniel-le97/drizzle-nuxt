<script setup lang="ts">
import Features from '~/components/Features.vue';


</script>

<template>
  <div>
    <Hero />

    <main class=" flex flex-col items-center justify-start gap-8 ">
      <Todos />
      <Features/>
      <InsideTemplate />

      <div class="divider mt-24 m-0 text-4xl font-bold text-base-content">
        Pre-made Components
      </div>

      <PricingPlan />
      <div class="divider " />
      <Testimonials />
      <div class="divider " />
      <TemplateBanner />
    </main>
  </div>
</template>
