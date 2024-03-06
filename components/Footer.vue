<template>
    <!-- Footer -->
	<footer>
		<div class="copyright">
			{{year}} {{title}}
			<div><a :href="profile_link" class="social-icon fa-brands fa-linkedin"></a></div>
		</div>
	</footer>
</template>

<script setup>
const title = ref('KDWP Web Programming.');
const profile_link = ref('http://www.linkedin.com/pub/kumar-desai/3/361/9b6');
const date = new Date();
const year = ref(date.getFullYear());
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
footer {
    padding: 30px 0;
    text-align: center;
    font-size: 16px;
    .copyright {
        div {
            padding-top: 10px;
            .social-icon:before {
                font-size: 35px;

            }
        }
    }
}
</style>
