<?php
$a = '1'; // assigning '1' to variable a
$b = &$a;   // both variable are pointing to the same data >> b == 1
$b = "2$b"; // since they point to same data, b == 21 and a will also equal 21
echo $a.", ".$b; // output 21, 21
?>