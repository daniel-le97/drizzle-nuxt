<template>
<nav class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>

      <nuxt-link to="/" class="p-2">
          Authors
        </nuxt-link>
        <nuxt-link to="/books" class="p-2">
          Books
        </nuxt-link>
  </div>
  <div class="flex lg:hidden ">
  
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
     <Icon name="mdi:menu" class="w-10 h-10" />
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>

</template>