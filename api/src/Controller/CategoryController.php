<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    private CategoryRepository $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
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
}
