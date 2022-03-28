<?php
  namespace Model;
  use WeatherAPIInterface;

  const API_KEY = 'ce95ea69b2f01da5d85a42d96a350308';
  class WeatherAPI implements WeatherAPIInterface
  {

    public static function get_cities()
    {
      $str = file_get_contents(__DIR__ . '/../city-list.json');
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
      try {
        $client = new \GuzzleHttp\Client();
        $response = $client->get("https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=" . API_KEY);
        return $response->getBody()->getContents();
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