<?php
if ( in_category('caseshow') ) {
include(TEMPLATEPATH . '/single_case.php');
}
else {
include(TEMPLATEPATH . '/single_blog.php');
}
?>