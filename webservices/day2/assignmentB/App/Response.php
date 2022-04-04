<?php
  namespace App;

  class Response
  {
    public static function success($data = '') {
      $response = [
        'success'=>true,
      ];
      if ($data !== '') {
        $response['data'] = $data;
      }
      return json_encode($response);
    }
    public static function error($error) {
      $response = [
        'success'=>false,
        'error' => $error
      ];
      return json_encode($response);
    }
  }