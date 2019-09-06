<script>
  import { send, receive } from "../components/crossfade.js";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<main transition:fade>
  <div class="flex content-start content-wrap">
    <div class="w-1/2 p-10">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          in:receive={{ key: 'react' }}
          out:send={{ key: 'react' }}
          class="w-full"
          src="react.svg"
          alt="React" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">React is Awesome</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
            font-semibold text-gray-700 mr-2">
            #lint
          </span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
            font-semibold text-gray-700 mr-2">
            #debug
          </span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
            font-semibold text-gray-700">
            #introspect
          </span>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-10">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          in:receive={{ key: 'ubuntu' }}
          out:send={{ key: 'ubuntu' }}
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t
          lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('ubuntu.svg')"
          title="Woman holding a mug" />
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0
          lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none
          lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2
                  2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2
                  0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
              Can you develop React in Ubuntu
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <img
              in:receive={{ key: 'vscode' }}
              out:send={{ key: 'vscode' }}
              class="w-10 h-10 rounded-full mr-4"
              src="visualstudio.svg"
              alt="Avatar of React Team" />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Code Team</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
