<article <?php post_class( 'book' ); ?> id="post-<?php the_ID(); ?>">
	<?php

		// If we have a featured image, show it, if not display the title.

	 if ( has_post_thumbnail() ) { ?>
		<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_post_thumbnail('book'); ?></a>
		
	<?php } else { ?>
		<h2 class="post-title entry-title">
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
		</h2>
	<?php } ?>
	<a class="book-btn outline" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php _e( 'View' , 'meanthemes' ); ?></a>

</article>
