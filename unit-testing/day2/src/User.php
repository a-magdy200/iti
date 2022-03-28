<?php
  namespace Ahmed\Test;
  class User
  {
    private string $name;
    private string $email;

    /**
     * @param string $name
     * @param string $email
     */
    public function __construct(string $name = "", string $email = "")
    {
      $this->name = $name;
      $this->email = $email;
    }


    /**
     * @param string $name
     * @return string
     */
    public function getName(string $name = ''): string
    {
      if (!empty($name))  {
        $this->name = $name;
      }
        return $this->name;
    }

    /**
     * @param string $email
     * @return string
     */
    public function getEmail(string $email = ''): string
    {
      if (!empty($email))  {
        $this->email = $email;
      }
        return $this->email;
    }

  }