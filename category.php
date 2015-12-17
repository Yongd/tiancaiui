<?php
if ( in_category('caseshow') ) {
include(TEMPLATEPATH . '/category_case.php');
}
else {
include(TEMPLATEPATH . '/category_blog.php');
}
?>