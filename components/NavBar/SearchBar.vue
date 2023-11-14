<script setup>
import { ref } from 'vue'
import mockData from '../../MockData/MOCK_DATA.json'

const searchTerm = ref('')
const originalData = mockData // Store the original data
const searchResults = ref(originalData)
const showResultsList = ref(false)

function showResults() {
  if (searchTerm.value === '') {
    // If search term is empty, reset searchResults to the original data
    searchResults.value = originalData
    showResultsList.value = false
  }
  else {
    const filteredResults = originalData.filter((result) => {
      return result.first_name.toLowerCase().includes(searchTerm.value.toLowerCase())
    })

    searchResults.value = filteredResults
    showResultsList.value = true
  }
}
function highlightMatch(text) {
  const regex = new RegExp(searchTerm.value, 'gi')
  return text.replace(regex, match => `<span class="  text-accent">${match}</span>`)
}
</script>

<template>
  <div class="relative hidden lg:block">
    <div class="dropdown">
      <label tabindex="0" class=""> <input
        v-model="searchTerm " type="text" placeholder="Search..." class="input focus:bg-transparent w-full   py-0   relative" @keydown="focusInput"
        @input="showResults"
      ></label>
      <ul
        v-if="showResultsList" tabindex="0"
        class="dropdown-content rounded-md z-[1] mt-4 w-full   menu  shadow-md bg-base-100 rounded-box "
      >
        <div class="max-h-96 overflow-y-scroll p-3">
          <li v-if="searchResults.length > 0" class="text-xs font-medium ">
            Results:
          </li>
          <li v-else class="text-xs font-medium text-error ">
            No Results
          </li>
          <div class="divider m-0" />
          <li v-for="result in searchResults" v-if="searchResults.length > 0" :key="result.id" v-motion-slide-right>
            <NuxtLink :to="`/dynamic/${result.id}`" class="p-2 btn w-full btn-ghost  font-medium">
              <span v-html="highlightMatch(result.first_name)" />
            </NuxtLink>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.results-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
}

.results-list li {
  padding: 8px;
  cursor: pointer;
}
</style>
