<template>
	<component
		:type="type"
		:is="tag"
		:to="to"
		:id="id"
		:href="href"
		:class="classes"
		:target="computedTarget"
		:disabled="disabled"
		@click="onClick"
		:style="style"
	>
		<span class="m-button__label">
			<slot>
				{{ label }}
			</slot>
		</span>
	</component>
</template>

<script>
export default {
	name: 'AButton',
	props: {
		size: {
			type: String,
			default: 'medium',
			validator: function (value) {
				return ['small', 'medium', 'large'].indexOf(value) !== -1;
			},
		},
		to: {
			type: [Object, String]
		},
		backgroundColor: String,
		color: String,
		label: String,
		id: String,
		type: String,
		href: String,
		target: String,
		primary: Boolean,
		secondary: Boolean,
		success: Boolean,
		warning: Boolean,
		error: Boolean,
		disabled: Boolean
	},
	computed: {
		computedTarget() {
			return this.target || (this.href ? '_blank' : null)
		},
		classes() {
			return {
				'm-button': true,
				'm-button--primary': this.primary,
				'm-button--secondary': this.secondary,
				'm-button--disabled': this.disabled,
				'm-button--success': this.success,
				'm-button--error': this.error,
				'm-button--warning': this.warning,
				[`m-button--${this.size}`]: true,
			};
		},
		tag() {
			if (this.href) return 'a'
			if (this.to) return 'router-link'
			return 'button'
		},
		style() {
			return {
				backgroundColor: this.backgroundColor,
				color: this.color
			};
		},
	},
	methods: {
		onClick(event) {
			this.$emit('onClick', event);
		},
	},
};
</script>
