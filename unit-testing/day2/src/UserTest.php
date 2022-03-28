<?php
//  require_once "../vendor/autoload.php";
  namespace Ahmed\Test;
  use PHPUnit\Framework\TestCase;
  class UserTest extends TestCase
  {
    public User $user;
    public string $defaultName = "Ahmed";
    public string $defaultEmail = "ahmed@app.com";

    public function setUp(): void
    {
      $this->user = new User($this->defaultName, $this->defaultEmail);
    }

    public function testGetEmail()
    {
      self::assertEquals($this->defaultEmail, $this->user->getEmail(), "Get name should return $this->defaultEmail");
    }

    public function testGetName()
    {
      self::assertEquals($this->defaultName, $this->user->getName(), "Get name should return $this->defaultName");
    }

    public function testSetEmail()
    {
      $testEmail = "samy@gmail.com";
      self::assertEquals($testEmail, $this->user->getEmail($testEmail), "Get name should return $testEmail");
    }

    public function testSetName()
    {
      $testName = "Samy";
      self::assertEquals($testName, $this->user->getName($testName), "Get name should return $testName");
    }

    public function tearDown(): void
    {
      unset($this->user);
    }
  }
