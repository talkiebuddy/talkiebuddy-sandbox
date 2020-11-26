<template>
	<ul class="m-nav-list" v-if="list.length">
		<a-nav-item
			v-for="item in list"
			:to="item.to"
			:href="item.href"
			:key="item.label"
			@click="onClick"
		>
			{{ item.label }}
		</a-nav-item>
	</ul>
</template>

<script>
import ANavItem from '../../atoms/ANavItem'

export default {
	name: 'MNavList',
	props: {
		list: Array
	},
	components: {
		ANavItem
	},
	methods: {
		onClick() {
			this.$emit('click', this.$emit);
		}
	}
}
</script>

