<?php declare(strict_types = 1);

namespace App\Normalizer;

use App\Entity\Client;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

final class ClientNormalizer implements NormalizerInterface, NormalizerAwareInterface
{
    use NormalizerAwareTrait;

    public function normalize($result, string $format = null, array $context = []): array
    {
        /** @var Client $result */

        return [
            'id'     => $result->getId(),
            'age'    => $result->getAge(),
            'name'   => $result->getName(),
            'gender' => $result->getGender(),
        ];
    }

    public function supportsNormalization($data, string $format = null): bool
    {
        return $data instanceof Client;
    }
}
