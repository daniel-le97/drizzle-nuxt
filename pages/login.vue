<script setup lang="ts">
import SectionHeader from '~/components/Global/SectionHeader.vue';

const { signIn, signOut, session } = useAuth()
definePageMeta({ middleware: "guest-only" })
</script>

<template>
  <main
    class="p-10 w-full flex flex-col items-center justify-center "
  >
  <SectionHeader title="LOGIN WITH GITHUB" subtitle="This is a guest-only protected route, once authenticated users will be unable to reach this until you sign out."/>

   <pre><code>definePageMeta({ middleware: "guest-only" })</code></pre>
    <div class="flex flex-col items-center  w-2/3 ">

      <ul class="menu  rounded-box ">
        <li class="my-6">
          <a href="/api/auth/signin" class="mx-auto  w-full text-2xl ">Native Link Sign in</a>
        </li>
        <li v-if="!session" class="mx-auto">
          <button class="p-0 m-0 rounded-full w-fit" @click="signIn()">
            <Icon name="uil:github" class="text-8xl" />
          </button>
        </li>
        <li v-if="session" class="mx-auto">
          <div class="tooltip" data-tip="Logout">
            <button class="p-0 m-0 rounded-full w-fit" @click="signOut()">
              <Icon name="uil:signout" class="text-5xl" />
            </button>
          </div>
        </li>
      </ul>
    </div>




  </main>
</template>


<style>
pre {
  background-color: #1e1e1e; /* VS Code background color */
  color: #d4d4d4; /* VS Code text color */
  font-family: 'Courier New', monospace; /* Monospaced font for code */
  font-size: 14px; /* Font size for code */
  padding: 10px; /* Padding around the code */
  line-height: 1.4; /* Line height for code */
  white-space: pre-wrap; /* Allow code to wrap within the <pre> tag */
  word-wrap: break-word; /* Ensure long words break and wrap */

  /* Optional: Add a border for visual separation */
  border: 1px solid #333;
  border-radius: 3px;
}

/* Style code elements within the <pre> tag */
pre code {
  font-family: 'Courier New', monospace; /* Use monospaced font for code */
  font-size: 14px; /* Font size for code */
  white-space: pre-wrap; /* Allow code to wrap within the <code> tag */
  word-wrap: break-word; /* Ensure long words break and wrap */
}

/* Optional: Style line numbers (if present) */
.line-numbers {
  display: inline-block;
  padding-right: 10px; /* Adjust as needed */
  color: #777; /* Line number color */
  user-select: none; /* Prevent line numbers from being selected */
}


</style>
