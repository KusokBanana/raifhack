<?php

namespace App\Entity;

use App\Repository\CategoryClientRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategoryClientRepository::class)
 * @ORM\Table(name="category_client")
 */
class CategoryClient
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private int $clientId;

    /**
     * @ORM\Id
     * @ORM\Column(type="text")
     */
    private string $categoryName;

    public function __construct()
    {
    }

    /**
     * @return int
     */
    public function getClientId(): int
    {
        return $this->clientId;
    }

    /**
     * @return string
     */
    public function getCategoryName(): string
    {
        return $this->categoryName;
    }
}
