<?php
  const API_KEY = 'ce95ea69b2f01da5d85a42d96a350308';
  class WeatherAPI implements WeatherAPIInterface
  {

    public static function get_cities()
    {
      $str = file_get_contents(__DIR__ . '/city-list.json');
      $json = json_decode($str, true);
      $cities = [];
      foreach ($json as $city) {
        if (strtolower($city['country']) === 'eg') {
          $cities[] = $city;
        }
      }
      return $cities;
    }

    public static function get_weather($lat, $lon)
    {

      $lat = $_GET['lat'];
      $lon = $_GET['lon'];
      try {
        $curl = curl_init("https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=" . API_KEY);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        return curl_exec($curl);
      } catch
      (Exception $exception) {
        return json_encode([
          'status' => 501,
          'message' => "Gateway Error"
        ]);
      }
    }
    public static function get_current_time()
    {
      // TODO: Implement get_current_time() method.
    }
  }