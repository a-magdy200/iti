<?php

  namespace Ahmed\Test;

  use PHPUnit\Framework\TestCase;

  include("factorial.php");

  class FactorialTest extends TestCase
  {
    public function testFactorialZero(){
      self::assertEquals(1, factorial(0), "Factorial 0 should return one");
    }
    public function testFactorialOne(){
      self::assertEquals(1, factorial(1), "Factorial 1 should return one");
    }
    public function testFactorialFive(){
      self::assertEquals(120, factorial(5), "Factorial 5 should return 120");
    }
    public function testFactorialRandom(){
      $random = 7;
      $value = 7 * 6 * 5 * 4 * 3 * 2;
      self::assertEquals($value, factorial($random), "Factorial $random should return $value");
    }
    public function testFactorialMinusThree(){
      self::assertNull(factorial(-3), "Factorial -3 should return null");
    }
    public function testFactorialOnePointFive(){
      self::assertNull(factorial(1.5), "Factorial 1.5 should return null");
    }
    public function testFactorialFalse(){
      self::assertNull(factorial(false), "Factorial false should return null");
    }
    public function testFactorialString(){
      self::assertNull(factorial("abc"), "Factorial <string> should return null");
    }
  }