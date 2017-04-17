<div class="loop">

<?php
	rewind_posts();
	if (have_posts()) :
	while (have_posts()) : the_post();
	if(!get_post_format()) {
	   get_template_part('post-formats/loop', 'standard');
	} else {
	   get_template_part('post-formats/loop', get_post_format());
	}
	endwhile;
	endif;
?>

<?php get_template_part('_part', 'nav-archive'); ?>

<?php wp_reset_query(); ?>

</div>
