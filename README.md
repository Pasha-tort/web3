# Web3 task-test

## Запуск

Установка пакетов

```
yarn
```

Запуск разработки(всего репозитория)

```
yarn nx run-many -t serve
```

Запуск разработки(одного приложения)

```
yarn nx serve <name-app>
```

> Есть два приложения orders-observer, api

## Структура репозитория

- [orders-observer](apps/orders-observer/app/src/main.ts) - ловит события смарк контракта и хранит их в mongoDB

  - [orders-observer-slice](apps/orders-observer/libs/slice/src/index.ts) - здесь описаны dto и интерфейсы, которые характерны для микросервиса [orders-observer](apps/orders-observer/app/src/main.ts)
  - [orders-observer-transport](apps/orders-observer/libs/transport/src/index.ts) - здесь описаны транспортные классы, для запросов rmq другими микросервисами к микросервису [orders-observer](apps/orders-observer/app/src/main.ts)

- [api](apps/api/app/src/main.ts) - предоставляет api для запросов к бекэнду, по rmq делает запросы к приложению [orders-observer](apps/orders-observer/app/src/main.ts)
  - [api-slice](apps/api/libs/slice/src/index.ts) - здесь описаны dto и интерфейсы, которые характерны для микросервиса [api](apps/orders-observer/app/src/main.ts)
