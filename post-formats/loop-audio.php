<?php

	// Set up post class

		$postClass = "post format-audio";

		// If no featured image add no-image class

		if ( !has_post_thumbnail() ) {

			$postClass = "post format-audio no-image";

		 }

	// check to see if it is a single post and apply h1
	if( is_single() ) {

		$heading = "1";

	} else {

		$heading = "2";

	}

 ?>

<article <?php post_class($postClass); ?> id="post-<?php the_ID(); ?>">
	<?php get_template_part( '_part', 'featured-image' ); ?>
	<?php get_template_part( '_part', 'audio' ); ?>
	<div class="inner">
		<time class="post-date updated" datetime="<?php the_time('Y-m-d', '', ''); ?>"><span><?php the_time( 'd' ); ?></span><?php the_time( 'M' ); ?></time>
		<h<?php echo $heading; ?> class="post-title entry-title audio">
			<?php if ( !is_single() ) { ?>
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
			<?php } ?>
				<?php the_title(); ?>
			<?php if ( !is_single() ) { ?>
				</a>
			<?php } ?>
		</h<?php echo $heading; ?>>
		<?php get_template_part( '_part', 'meta-top' ); ?>
		<?php get_template_part( '_part', 'meta-bottom' ); ?>
	</div>

</article>

<?php

	if ( is_single() ) {

		// grab comments template
		comments_template();

	}

?>
