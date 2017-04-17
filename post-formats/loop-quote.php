<?php

	// Set up post class

		$postClass = "post format-quote";

		// If no featured image add no-image class

		if ( !has_post_thumbnail() ) {

			$postClass = "post format-quote no-image";

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
	<?php if ( is_single() ) { ?>
		<time class="post-date updated" datetime="<?php the_time('Y-m-d', '', ''); ?>"><span><?php the_time( 'd' ); ?></span><?php the_time( 'M' ); ?></time>
	<?php } ?>
	<div class="inner">
		
		<h<?php echo $heading; ?> class="post-title entry-title quote">
			<?php echo get_the_content(); ?>
		</h<?php echo $heading; ?>>

		<?php

			$getSourceName = get_post_meta($post->ID, '_single_format_quote', true);
			$getSourceUrl = get_post_meta($post->ID, '_single_format_quote_url', true);

		if ( $getSourceUrl || $getSourceName ) { ?>
				<h3 class="quote-source">
				<?php if( $getSourceUrl ) { ?>
					<a target="_blank" href="<?php echo $getSourceUrl; ?>" title="<?php echo $getSourceName; ?>">
				<?php } ?>
					- <?php echo $getSourceName; ?>
				<?php if( $getSourceUrl ) { ?></a>
			<?php } ?>
			</h3>
		<?php } ?>
		<?php get_template_part( '_part', 'meta-bottom' ); ?>
	</div>

</article>

<?php

	if ( is_single() ) {

		// grab comments template
		comments_template();

	}

?>
