<?php
/**
 * Template part l'affichage des bloc de cours dans front-page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package theme4w4
 */
global $tPropriété;
?>

<article class="flip-card">

  <div class="flip-card-inner">

    <div class="flip-card-front">
        <?php the_post_thumbnail('thumbnail' ); ?>
    </div>

    <div class="flip-card-back">
        <h1><a href="<?php echo get_permalink() ?>"><?php the_title(); ?></a></h1> 
        <!-- <p> <?php // the_author();?></p>
        <p> <?php // the_category();?></p> -->
    </div>

  </div>

</article>