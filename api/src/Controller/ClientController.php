<?php

namespace App\Controller;

use App\Repository\ClientRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ClientController extends AbstractController
{
    private ClientRepository $clientRepository;

    public function __construct(ClientRepository $clientRepository)
    {
        $this->clientRepository = $clientRepository;
    }

    /**
     * @Route("/clients", name="client")
     */
    public function index()
    {
        $clients = $this->clientRepository->findAndSortByPredictions();

        return $this->json([
            'data' => $clients,
        ]);
    }
}
