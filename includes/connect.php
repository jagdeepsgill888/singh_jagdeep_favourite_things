<?php
    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => 'db_fav_things',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = '';

    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
        // var_dump($pdo);
        // ehco (in this case) is almost like console.log
        // echo "your in! enjoy";
    } catch (PDOException $exception) {
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }
