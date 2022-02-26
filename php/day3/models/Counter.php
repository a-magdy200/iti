<?php

class Counter
{
    public static function getCount() {
        if (file_exists(FILE_PATH)) {
            $fileContents = file_get_contents(FILE_PATH);
            return intval($fileContents);
        }
        return 0;
    }

    public static function addVisit() {
        $count = self::getCount();
        $filePointer = fopen(FILE_PATH, "w+");
        fwrite($filePointer, $count + 1);
        fclose($filePointer);
    }

}