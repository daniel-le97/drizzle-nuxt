
<script setup lang="ts">
import SectionHeader from './Global/SectionHeader.vue';
</script>


<template>
    <SectionHeader
      title="Pricing Plans" subtitle="Our Budget Plan costs you absolutely nothing. That's right, it's zilch, zero, nada. Perfect for frugal individuals."
    />
  <div class="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mx-auto lg:space-x-10">
    <div class="rounded-2xl background-gradient flex items-center justify-center p-1">
      <div class="card shadow-xl bg-base-100">
        <div class="card-body items-center text-center  text-base-content ">
          <h2 class="mb-4  font-bold">
            Starter
          </h2>
          <div class="radial-progress text-primary" style="--value: 20; --size: 10rem; --thickness: 15px" />
          <div class="stat text-base-content">
            <div class="flex items-end mx-auto">
              <div class="stat-value text-primary">
                $5
              </div>
              <div class="text-sm">
                /mo
              </div>
            </div>
            <div class="mt-5">
              Unlimited projects <br>
              Limited core reports
              <br>
              60 day data history
              <br>7 3 members / projects
              <br>
              A/B Testing
            </div>
          </div>
          <button class=" btn btn-accent">
            CHOOSE PLAN
          </button>
        </div>
      </div>
    </div>
    <!-- GRADIENT BACKGROUND CARD -->
    <div class="card shadow-xl background-gradient scale-110">
      <div class="card-body items-center text-center">
        <h2 class="mb-4 text-neutral-content font-bold">
          Premium
        </h2>
        <div class="radial-progress text-neutral-content" style="--value: 50; --size: 10rem; --thickness: 15px" />
        <div class="stat">
          <div class="flex items-end mx-auto">
            <div class="stat-value text-neutral-content">
              $15
            </div>
            <div class="text-sm text-neutral-content">
              /mo
            </div>
          </div>
          <div class="mt-5 text-neutral-content">
            Unlimited projects <br>
            Limited core reports
            <br>
            60 day data history
            <br>7 3 members / projects
            <br>
            A/B Testing
          </div>
        </div>
        <button class=" btn btn-accent">
          CHOOSE PLAN
        </button>
      </div>
    </div>
    <!-- GRADIENT BACKGROUND CARD -->
    <div class="rounded-2xl background-gradient flex items-center justify-center p-1">
      <div class="card shadow-xl bg-base-100">
        <div class="card-body items-center text-center  text-base-content ">
          <h2 class="mb-4  font-bold">
            Enterprise
          </h2>
          <div class="radial-progress text-primary" style="--value: 100; --size: 10rem; --thickness: 15px" />
          <div class="stat text-base-content">
            <div class="flex items-end mx-auto">
              <div class="stat-value text-primary">
                $30
              </div>
              <div class="text-sm">
                /mo
              </div>
            </div>
            <div class="mt-5">
              Unlimited projects <br>
              Unlimited core reports
              <br>
              180 day data history
              <br>14 members / projects
              <br>
              Intergration
            </div>
          </div>
          <button class=" btn btn-accent">
            CHOOSE PLAN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
