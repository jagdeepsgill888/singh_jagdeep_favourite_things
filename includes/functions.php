<?php
 // $result will store the database request results so that we can encode and result them to index.php
  $result = array();
 

  function getAllUsers($conn)
  {
      $query = "SELECT * FROM tbl_tv_data";

      $runQuery = $conn->query($query);
  
      while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
          $result[] = $row;
      }
  
      //  return $result;
    echo(json_encode($result)); // was var_dump but it didnt work
  }

  //get a specific user
  function getSingleUser($conn, $id)
  {
      $query = "SELECT * FROM tbl_tv_data WHERE id=" . $id . "";
      $runQuery = $conn->query($query);//was pdo ,worked on postman was some reason
  
      while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
          $result[] = $row;
      }
  
      //  return $result;
    echo(json_encode($result)); // was var_dump but it didnt work
  }
