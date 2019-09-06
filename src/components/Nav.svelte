<script>
  import { send, receive } from "./crossfade.js";
  export let segment;
</script>

<nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href=".">
      <img class="fill-current h-8 w-8 mr-2" alt="BLT" src="logo.png" />
    </a>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a
        href="ubuntu"
        class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white
        mr-4">
        Ubuntu
      </a>
      <a
        href="vscode"
        class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white
        mr-4">
        Code
      </a>
      <a
        href="react"
        class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
        React
      </a>
    </div>
  </div>
</nav>
