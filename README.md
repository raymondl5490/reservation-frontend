# Reservation - Frontend

This project is a home assessment for the Henry Meds frontend application.

## Install Development Environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```sh
# node -v 18
npm install
npm run start
```

## Technologies

TypeScript, React, React Router, MUI

## Scenario

Henry has two kinds of users, **providers** and **clients**. Providers have a schedule where they are available to see clients. Clients want to book time, in advance, on that schedule.

**Providers**

- Have an id.
- Have a schedule
  - On Friday the 13th of August, I want to work between 8am and 3pm.

**Clients**

- Have an id.
- Want to reserve a 15m time ‘slot’ from a providers schedule.
  - Reservations expire after 30 mins if not confirmed.
  - Reservations must be made at least 24 hours in advance.
- Want to be able to confirm a reservation.

## Task

Build the front end for a mobile web application that covers as many of the following as possible in the time allotted:

- Allows providers to submit times they’d like to work on the schedule.
- Allows clients to list available slots.
- Allows clients to reserve an available slot.
- Allows clients to confirm their reservation.

Use whichever toolset you think is reasonable!

## Assumptions

Assume the API is being worked on in parallel and for the time being you could create a mock API or just hardcoded data from a file.
