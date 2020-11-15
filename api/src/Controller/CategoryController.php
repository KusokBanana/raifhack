<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\CategoryClient;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    private CategoryRepository $categoryRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(
        CategoryRepository $categoryRepository,
        EntityManagerInterface $entityManager
    )
    {
        $this->categoryRepository = $categoryRepository;
        $this->entityManager      = $entityManager;
    }

    /**
     * @Route("/categories", name="categories")
     */
    public function index()
    {
        $categories = $this->categoryRepository->findAll();

        $data = [];

        /** @var Category[] $categories */
        foreach ($categories as $category) {
            $data[$category->getName()] = [
                'mcc' => $category->getMcc(),
                'name' => $category->getName(),
            ];
        }

        return $this->json([
            'data' => array_values($data),
        ]);
    }

    /**
     * @Route("/categories/counts", name="categories")
     */
    public function counts()
    {
        $data = $this->entityManager->createQueryBuilder()
            ->select('category_client.categoryName as category_name')
            ->addSelect('COUNT(category_client.clientId) as count')
            ->from(CategoryClient::class, 'category_client')
            ->groupBy('category_client.categoryName')
            ->getQuery()->getArrayResult();

        return $this->json([
            'data' => $data,
        ]);
    }
}
