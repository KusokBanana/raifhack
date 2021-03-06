# Документация

Документация к небанковскому сервису от банка АО РайффайзенБанк «Знай клиента и конкурента», разработанной на хакатоне «RaifHack».

###### [**Ссылка на Прототип проекта**](http://130.193.56.209);

# Вступление и описание решения

Наш продукт является универсальным решением, предназначенным для массового сегмента - юридических лиц любого уровня. Предоставляет клиентам банка поведенческие и предсказательные данные по покупателям их целевой аудитории. Дает возможность принимать взвешенные бизнес-решения на основе актуальной аналитики.

Наше решение уникально удобным интерфейсом (дашбордом) со всеми ключевыми метриками, настраиваемостью данных из различных ML-моделей датасета банка. Может быть использовано как профессиональными маркетологами со стороны клиента, так и менее "продвинутым" ритейлером.

Продукт аккумулирует и обрабатывает огромный объем реальных транзакционных и поведенческих данных, на выходе ML-модели выдают прогнозы по покупательской способности, приоритетным категориям товаров, сегментации покупателей и наполняемости складов.

Стек проекта: PHP (Symfony), Python (Sklearn, Tensorflow), Docker, PostgreSQL, AngularJS.

У нас есть [***рабочая MVP-версия (минимально работоспособная версия продукта)***](http://130.193.56.209), которая не только обладает удобным интерфейсом, но и демонстрирует работу с нашей пробной ML-моделью. Мы запустили ее на [внешнем сервере](http://130.193.56.209).

Спасибо организаторам за интересную задачу, мы будем рады продолжить сотрудничество!

# Техническое описание проекта
## Установка
Т.к. в проекте используется микросервисная архитектура, большая часть сервисов доступна для скачивания в виде контейнеров в [реджистри от GitHub](https://github.com/alewkinr?tab=packages&repo_name=lyra).
Для локального развертывания решения необходимо авторизаваться в GitHub Package Registry [по иснструкции](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-to-github-packages) и в корне проекта выполнить команду `docker-compose up --build`

Важно, что у вас должен быть установлен и запущен `Docker`.

> После того, как установка всех необходимых зависимостей будет выполнена, вы сомжете потестировать систему локально по ссылке http://localhost/

## Структура
Проект представляет собой монорепозиторий. Ниже структура директорий:
```
.
├── Makefile
├── README.md
├── back
│   ├── auth
│   └── model
├── docker-compose.yaml
├── env
│   ├── LICENSE.md
│   ├── bin
│   ├── include
│   ├── lib
│   └── pyvenv.cfg
├── front
│   ├── Dockerfile
│   ├── Makefile
│   ├── README.md
│   ├── babel.config.js
│   ├── nginx
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   ├── src
│   ├── tailwind.config.js
│   └── vue.config.js
├── infra
│   ├── __init__.py
│   ├── env
│   ├── metrics
│   ├── postgres
│   ├── runner
│   └── traefik
└── ml
    ├── Makefile
    ├── README.md
    ├── __init__.py
    ├── __pycache__
    ├── bin
    ├── data
    ├── data_preparation.ipynb
    ├── lyra_tracker
    ├── models_selection.ipynb
    ├── requirements.txt
    └── scripts
```
Исходный код серверной части — в папке `back`, исходный код браузерной части приложения — в папке `front`. Кроме того, данные по разработке модели в директории `ml`, а данные по инфраструктурным вопросам в `infra`

Каждая директория по возможности содержит `README.md` файл с описанием и `Makefile` с базовыми командами.

## Архитектура приложения
Приложение состоит из 7 микро-сервисов, включая сервис авторизации, сервис моделей, сервис сбора метрик, сервис-ui и  т.д. 
ML модели размещены отдельно и запускаются в docker-контейнерах в требуемом окружении.

Основная ML-модель находится по следующему адресу https://github.com/KusokBanana/raifhack/blob/master/ml/Raif.ipynb - и представляет собой файл Jypiter Notepook. Запуск модели должен производиться на достаточно производительном железе, адаптированным под машинные вычисления, и иметь достаточный объем ресурсов как для хранения датасета, так и для произведения вычислений.

> т.к. githib не дает залить файл с агрегатами, которые составляют больше 100MB размером - то перед запуском ml-модели необходимо скопировать первоначальные данные и поместить их в папку ml/data/, расположенные по адресу https://drive.google.com/drive/folders/1rXOlz5CvPcRgYHmtIKFoEGkP1vqjrctD
> также для более производительных, но менее точных вычислений - могут быть использованы урезанные данные от производного датасета, доступные по адресу https://www.dropbox.com/s/hikex3m2it0buos/raif_fixed.zip?dl=0

# Дополнительные материалы

- [**Прототип проекта, т.е. рабочая MVP-версия (минимально работоспособная версия продукта)**](http://130.193.56.209).
- [Предварительная смета](https://docs.google.com/spreadsheets/d/1zhLjnOpjd-heAlAPz3_Fslc6U8FaxfYhzzyRhu9TONU/edit?usp=sharing) общих затрат по разработке полноценной версии проекта.
