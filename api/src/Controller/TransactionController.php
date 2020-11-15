<?php

namespace App\Controller;

use App\Entity\Transaction;
use App\Repository\TransactionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TransactionController extends AbstractController
{
    private TransactionRepository $transactionRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(
        TransactionRepository $transactionRepository,
        EntityManagerInterface $entityManager
    )
    {
        $this->transactionRepository = $transactionRepository;
        $this->entityManager         = $entityManager;
    }

    /**
     * @Route("/transactions/by-mcc", name="by-mcc")
     */
    public function index(Request $request)
    {
        $mcc = $request->query->get('mcc', '');
        $mcc = explode(',', $mcc);

        $expr = $this->entityManager->getExpressionBuilder();

        $transactions = $this->entityManager->createQueryBuilder()
            ->select('transaction.mcc')
            ->addSelect('transaction.date')
            ->addSelect('SUM(transaction.amount) as amount')
            ->from(Transaction::class, 'transaction')
            ->where(
                $expr->in('transaction.mcc', ':mcc')
            )
            ->orderBy('transaction.date')
            ->groupBy('transaction.date')
            ->addGroupBy('transaction.mcc')
            ->setParameter('mcc', $mcc)
            ->getQuery()->getArrayResult();

        return $this->json([
            'data' => array_map(
                fn(array $transaction) => [
                    'mcc' => $transaction['mcc'],
                    'date' => $transaction['date']->format('Y-m-d'),
                    'amount' => (int) $transaction['amount'],
                ],
                $transactions
            ),
        ]);
    }
}
