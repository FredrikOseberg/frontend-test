FROM cypress/included:3.2.0

COPY /cypress /cypress
COPY cypress.json /cypress.json

CMD ["cypress run"]