# NestJS + RabbitMQ architecture example with Docker

Simple model for distributing messages across multiple consumers, using @Golevelup module for creating exchanges and routing messages

## Instructions:
1) Install docker if you haven't already
2) Inside the project's root directory, run ``docker compose up -d``
3) Enter into the local RabbitMQ instance admin dashboard (localhost:15672, user: guest, password: guest)
4) Inside "Exchanges", verify if the "payments" exchange is in the list
5) Inside "payments", verify if the queues "bitcoin-payments" and "credit-payments" are bound to that exchange
6) Take a look at the DTO inside producer/src/purchase/dto, and POST a JSON following that model on localhost:3001
7) See the messages getting routed to their respective consumers
