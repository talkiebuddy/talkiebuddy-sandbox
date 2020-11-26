<template>
	<component class="a-text" :is="`${tag}`">
		<slot></slot>
	</component>
</template>

<script>
export default {
	name: 'AText',
	props: {
		tag: {
			type: String,
			default: 'p'
		}
	}
}
</script>