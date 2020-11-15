FROM php:7.4-fpm-buster

WORKDIR /var/www

COPY docker/php-fpm/php.ini /usr/local/etc/php/conf.d/docker-php-config.ini

RUN apt-get update && apt-get install -y \
    gnupg \
    procps \
    openssl \
    unzip \
    zlib1g-dev \
    libzip-dev \
    libfreetype6-dev \
    libpng-dev \
    libjpeg-dev \
    libicu-dev  \
    libonig-dev \
    libxslt1-dev \
    acl \
    libpq-dev

RUN docker-php-ext-configure gd --with-jpeg --with-freetype
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql

RUN docker-php-ext-install pdo_pgsql pgsql

# zip gd intl mbstring
