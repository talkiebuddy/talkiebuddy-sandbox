<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<a-button>Atomic Button</a-button>

		<a-button primary>Click here2</a-button>
		<a-button secondary>Click here2</a-button>
		<a-button success>Click here2</a-button>
		<a-button error>Click here</a-button>
		<a-button warning>Click here</a-button>

		<a-button disabled>Click here</a-button>
		<a-button href="https://google.com">Click here</a-button>
		<a-image></a-image>
		<a-icon name="twitter" size="large"></a-icon>
		<m-nav-list :list="list"></m-nav-list>
	</div>
</template>

<script>

const listRoute = [
	{
		label: 'Home',
		to: '/'
	},
	{
		label: 'About Us',
		to: '/about'
	}
]
// @ is an alias to /src
import AButton from '@/components/atoms/AButton'
import AImage from '@/components/atoms/AImage'
import AIcon from '@/components/atoms/AIcon'
import MNavList from '@/components/molecules/MNavList'

export default {
	name: 'Home',
	components: {
		AButton,
		AImage,
		AIcon,
		MNavList
	},
	data() {
		return {
			list: listRoute
		}
	}
}
</script>

