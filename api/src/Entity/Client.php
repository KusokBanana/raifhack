<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 * @ORM\Table(name="clients")
 */
class Client
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string")
     */
    private int $id;

    /**
     * @ORM\Column(type="integer")
     */
    private int $age;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private string $name;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $gender;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private string $category;

    public function __construct()
    {
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getGender(): string
    {
        return $this->gender;
    }
}
