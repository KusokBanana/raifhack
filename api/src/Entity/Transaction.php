<?php

namespace App\Entity;

use App\Repository\TransactionRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TransactionRepository::class)
 * @ORM\Table(name="transactions")
 */
class Transaction
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="id", initialValue=1)
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="transactions")
     * @ORM\JoinColumn(nullable=true)
     */
    private ?Client $client;

    /**
     * @ORM\Column(type="date")
     */
    private \DateTimeInterface $date;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $merchant;

    /**
     * @ORM\Column(type="integer")
     */
    private string $mcc;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $city;

    /**
     * @ORM\Column(type="float")
     */
    private float $amount;

    public function getId(): int
    {
        return $this->id;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    public function getDate(): \DateTimeInterface
    {
        return $this->date;
    }

    public function getMerchant(): ?string
    {
        return $this->merchant;
    }

    public function getMcc(): string
    {
        return $this->mcc;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }
}
