<?php

$users = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach($users as $user => $age) {
    echo "Name is " . $user . ", And Age is " . $age . " Years Old";
    echo "<br>";
}