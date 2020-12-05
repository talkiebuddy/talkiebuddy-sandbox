<template>
	<input
		:class="classes"
		:id="id"
		:type="inputType"
		:value="value"
		:disabled="disabled"
		:name="name"
		:autocomplete="autocomplete"
		:placeholder="placeholder"
		:pattern="pattern"
		:inputmode="inputmode"
		@input="$emit('input', $event.target.value)"
		@focus="$emit('focus', $event)"
		@blur="$emit('blur', $event)"
		@keypress="$emit('keypress', $event)"
		@paste="$emit('paste', $event)"
	/>
</template>

<script>
export default {
	name: 'AInput',
	props: {
		type: {
			type: String,
			required: true,
			validator(value) {
				return [
					'text',
					'email',
					'url',
					'tel',
					'search',
					'password'
				]
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		autocomplete: {
			type: String,
			default: 'on'
		},
		value: {
			type: String,
			default: ''
		},
		id: String,
		name: String,
		pattern: String,
		inputmode: String,
	},
	data() {
		return {
			inputType: this.type,
		}
	},
	// computed: {
	// 	classes() {
	// 		return [
	// 			'v-a-input-text',
	// 			`v-a-input-text--${this.type}`
	// 		]
	// 	}
	// }
}
</script>

// // <style lang="scss">
// // input {
// // 	font-size: inherit;
// // 	line-height: 1;
// // 	padding: 0.8rem 1rem;
// // 	background: none !important;
// // 	width: 100%;
// // 	border: 0;
// // 	color: inherit;
// // }

// // .v-a-input-text {
// // 	border: 0.1rem solid $grey-light;
// // 	width: 100%;
// // 	border-radius: 0.3rem;
// // 	position: relative;

// // &__icon {
// // 	width: 2rem;
// // 	height: 2rem;
// // 	position: absolute;
// // 	right: 1rem;
// // 	top: 0;
// // 	bottom: 0;
// // 	margin: auto;
// // }

// // &--password {
// // 	input {
// // 		padding-right: 4rem !important;
// // 	}
// // }
// // }
//
</style>
