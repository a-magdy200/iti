<?php

class Visitor
{
    private $ip;
    private $visits;
    public function __construct($ip, $visits)
    {
        $this->ip = $ip;
        $this->visits = $visits;
    }

    /**
     * @return mixed
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * @param mixed $ip
     */
    public function setIp($ip)
    {
        $this->ip = $ip;
    }

    /**
     * @return mixed
     */
    public function getVisits()
    {
        return $this->visits;
    }

    /**
     * @param mixed $visits
     */
    public function setVisits($visits)
    {
        $this->visits = $visits;
    }
    public function incrementVisits() {
        $this->visits++;
    }


}