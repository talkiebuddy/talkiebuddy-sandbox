<template>
	<component
		:id="id"
		:class="classes"
		:is="tag"
		:style="style"
		@click="onClick"
	>
		<slot>
			{{ text }}
		</slot>
	</component>
</template>

<script>
export default {
	name: 'ABox',
	props: {
		id: String,
		tag: {
			type: String,
			default: 'div'
		},
		text: String,
		direction: String,
		align: String,
		justify: String,
		overflow: String,
		wrap: String,
	},
	computed: {
		classes() {
			return {
				'a-box': true,
			};
		},
		style() {
			return {
				flexDirection: this.direction ? this.direction : 'column',
				alignItems: this.align ? this.align : 'center',
				justifyContent: this.justify,
				overflow: this.overflow,
			};
		},
	},
	methods: {
		onClick(event) {
			this.$emit('onClick', event);
		},
	},
}
</script>
