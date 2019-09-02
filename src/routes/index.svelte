<script>
	import { send, receive } from '../components/crossfade.js';
	import { fade } from 'svelte/transition';
</script>
<svelte:head>
	<title>BLT Svelte Concept Site</title>
</svelte:head>

<main transition:fade>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/3 p-10">
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<a href="vscode"><img in:receive="{{ key: 'vscode' }}" out:send="{{ key: 'vscode' }}" class="w-full" src="visualstudio.svg" alt="VS Code"></a>
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">Code is Awesome</div>
			<p class="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
		</div>
		<div class="px-6 py-4">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#lint</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#debug</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#introspect</span>
		</div>
	</div>
  </div>
    <div class="w-full md:w-1/3 p-10">
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<a href="react"><img in:receive="{{ key: 'react' }}" out:send="{{ key: 'react' }}" class="w-full" src="react.svg" alt="VS Code"></a>
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">Replacing React</div>
			<p class="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
		</div>
		<div class="px-6 py-4">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#modular</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#component</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#ui</span>
		</div>
	</div>
  </div>
    <div class="w-full md:w-1/3 p-10">
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<a href="ubuntu"><img in:receive="{{ key: 'ubuntu' }}" out:send="{{ key: 'ubuntu' }}" class="w-full" src="ubuntu.svg" alt="VS Code"></a>
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">Ubuntu is Ok</div>
			<p class="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
			</p>
		</div>
		<div class="px-6 py-4">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#linux</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#platform</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#distro</span>
		</div>
	</div>
  </div>
</div>
</main>
