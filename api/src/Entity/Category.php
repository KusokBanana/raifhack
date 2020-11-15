<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 * @ORM\Table(name="categories")
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private int $mcc;

    /**
     * @ORM\Column(type="text")
     */
    private string $name;

    public function __construct()
    {
    }

    public function getMcc(): int
    {
        return $this->mcc;
    }

    public function getName(): string
    {
        return $this->name;
    }
}
