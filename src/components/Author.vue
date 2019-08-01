<template>
	<div class="author">

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metaData.siteName }}
		</h1>

		<p class="author__intro">
			{{ $static.metaData.siteDescription }}
		</p>

		<ul class="btn-social social-nav social-icon-sizing">
			 <li>
				 <a href="https://twitter.com/lndgrn" target="_blank" rel="noopener">
					 <i class="fa fa-twitter fa-1x"></i>
				 </a>
				 <span class="screen-reader-text-for-icons">Twitter</span>
			 </li>
			 <li>
				 <a href="https://github.com/lingeringcode" target="_blank" rel="noopener">
					 <i class="fa fa-github-alt"></i>
				 </a>
				 <span class="screen-reader-text-for-icons">Github</span>
			 </li>
		 </ul>

	</div>
</template>

<static-query>
	query {
	  metaData {
	    siteName,
			siteDescription
	  }
	}
</static-query>

<script>
	export default {
		props: ['showTitle']
	}
</script>

<style lang="scss">
	.author {
		margin: 0 auto;
		max-width: 500px;
		text-align: center;
		padding-bottom: calc(var(--space) / 2);

		&__image {
			border-radius: 100%;
			width: 90px;
			height: 90px;
			margin-bottom: 1em;
		}

		&__intro {
			opacity: .8;
		}

		&__site-title {
			margin: 0 auto;
			font-size: 1.5em;
			max-width: 400px;
		}

		&__links {
			margin-top: -.5em;
			a {
				margin: 0 .5em;
			}
		}
	}
</style>
