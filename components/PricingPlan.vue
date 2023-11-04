<template>
  <div class="text-center flex-col justify-center flex items-center  mb-8">
    <div class=" font-bold text-center  mb-4 gradient-text text-6xl">
      The Pricing Plan
    </div>
    <div class=" text-center  w-1/2">
      The most powerful analytics to understand how people use your app or website. Choose from any of our pricing plans that work to fit you as you grow.
    </div>
  </div>

  <div class="flex mx-auto space-x-4">
    <div
      class="rounded-2xl bg-gradient-to-b from-indigo-500 via-orange-500 to-pink-500 flex items-center justify-center p-1"
    >
      <div class="card shadow-xl bg-white">
        <div class="card-body items-center text-center text-indigo-950 ">
          <h2 class="mb-4">
            Starter
          </h2>
          <div
            class="radial-progress text-indigo-500"
            style="--value: 20; --size: 10rem; --thickness: 15px"
          />
          <div class="stat">
            <div class="flex items-end mx-auto">
              <div class="stat-value text-indigo-500">
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

          <button
            class="py-2 px-4 border-gray-200 border-2 outline-white text-pink-500 hover:bg-gradient-to-b from-indigo-500 via-orange-500 to-pink-500 hover:text-white transition-all duration-500 font-bold hover:border-gray-500 text-sm"
          >
            CHOOSE PLAN
          </button>
        </div>
      </div>
    </div>

    <div
      class="card shadow-xl bg-gradient-to-b from-indigo-500 via-orange-500 to-pink-500"
    >
      <div class="card-body items-center text-center">
        <h2 class="mb-4 text-white">
          Premium
        </h2>
        <div
          class="radial-progress text-white"
          style="--value: 50; --size: 10rem; --thickness: 15px"
        />
        <div class="stat">
          <div class="flex items-end mx-auto">
            <div class="stat-value text-white">
              $15
            </div>
            <div class="text-sm text-white">
              /mo
            </div>
          </div>
          <div class="mt-5 text-white">
            Unlimited projects <br>
            Limited core reports
            <br>
            60 day data history
            <br>7 3 members / projects
            <br>
            A/B Testing
          </div>
        </div>
        <button
          class="py-2 shadow-md shadow-indigo-700 px-4 text-pink-500 bg-white border-white font-bold outline-white hover:text-indigo-950"
        >
          CHOOSE PLAN
        </button>
      </div>
    </div>

    <div
      class="rounded-2xl bg-gradient-to-b from-indigo-500 via-orange-500 to-pink-500 flex items-center justify-center p-1"
    >
      <div class="card shadow-xl bg-white">
        <div class="card-body items-center text-center text-indigo-950">
          <h2 class="mb-4">
            Enterprise
          </h2>
          <div
            class="radial-progress text-indigo-500"
            style="--value: 100; --size: 10rem; --thickness: 15px"
          />
          <div class="stat">
            <div class="flex items-end mx-auto">
              <div class="stat-value text-indigo-500">
                $30
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

          <button
            class="py-2 px-4 border-gray-200 border-2 outline-white text-pink-500 hover:bg-gradient-to-b from-indigo-800 via-purple-500 to-pink-500 hover:text-white transition-all duration-500 font-bold hover:border-gray-500 text-sm"
          >
            CHOOSE PLAN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
