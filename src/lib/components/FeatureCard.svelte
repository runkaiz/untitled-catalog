<script>
	export let title = '';
</script>

<div class="card w-96 bg-primary text-primary">
	<div class="card-body">
		<h2 class="card-title text-primary-content">{title}</h2>
		<p class="text-primary-content"><slot /></p>
	</div>
</div>
