<ul class="meta top">
<?php if( !is_page() ) { ?>
	<li class="cat post-tags"><?php the_category(', '); ?></li>
<?php } ?>
	
	<?php

	// Hide comments

	if( false === get_option( 'hide_comments' ) ) { ?>

	<li class="comments post-tags"><?php comments_popup_link( __( '0 Comments','meanthemes' ), __( '1 Comment','meanthemes' ), __( '% Comments','meanthemes' ) ); ?></li>

	<?php } ?>

</ul>
