<script setup lang="ts">
import { ref } from 'vue';
import {useRoute} from 'vue-router'
import SectionHeader from '../../components/Global/SectionHeader.vue';
import mockData from '../../MOCK_DATA.json';

const originalData = ref(mockData);
 const route = useRoute();

const paramId = route.params.id
const dynamicData = originalData.value.find((i) => i.id.toString() === paramId )



</script>

<template>
  <main>
    <SectionHeader title="This Is an Dynamic Route"
      subtitle="Data displayed here specific to the object matching the router params." />
    <div class="  flex  items-center justify-center">

      <div v-if="dynamicData" class="">
        <p class="p-5 bg-neutral text-neutral-content rounded-md">https://yourWebsite.com/dynamic/<span class="text-success font-bold">{{ dynamicData.id }}</span></p>

     <div  class="mt-10 p-2 card glass flex flex-wrap items-center justify-center">
  <h2 class="text-center font-bold text-xl">
    DATA
  </h2>
          <ul class="menu  w-full rounded-box">
            <li class="btn btn-ghost">
              {{ dynamicData.email }}
            </li>
            <li class="btn btn-ghost">
              {{ dynamicData.first_name }}, {{  dynamicData.last_name }}
            </li>
           <li class="btn btn-ghost">
{{dynamicData.ip_address}}

            </li>
          </ul>
        
        </div>












      </div>
      <div v-else>
         <h2  class="p-5 bg-neutral text-neutral-content rounded-md">
NO DYNAMIC DATA
        </h2>
      </div>
    </div>
  </main>
</template>

<style></style>
