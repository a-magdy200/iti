<?php
require_once("config.php");
function my_autoloader($class) {    

    $path = __DIR__.'/Model/' . $class . '.php';
    if (file_exists($path)) {
        
        require_once($path);
    } else {
       throw new Exception("Class ".$class." dosn't found");
                return false;
    }
}

spl_autoload_register('my_autoloader');


