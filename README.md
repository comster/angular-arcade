# Arcade Token Tracking System

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-arcade) | 

[Website](https://angular-arcade.stackblitz.io)

## Proposed Additonal Features

- Persist ledger to server / db
- User auth / login
- Material design components
- Page routing (separate view components for Store / Transactions / Balance etc.)
- Shop items to purchase

## Purpose

A customer goes to the ACME arcade, where they can purchase and spend tokens. Create a simple UI and ledger system that records the token balance for a single customer and provides a detailed history of transactions.

## Requirements

- Implemented in Angular (version 2+)
- As a customer
  - I want to purchase X number of tokens
  - I want to be able to spend X number of tokens
  - I want to be able to see my current balance
  - I want to see a history of transactions. Each transaction contains a description of the action performed.
  - I should not be able to spend more tokens than I currently have

## Use Case

- John purchased 5 tokens with the description “Card Refill”
- John has used 4 tokens with the description of “Sonic Adventure Game”

## Goal

Create a UI that satisfies the requirements above. This task shouldn’t take more than a couple hours.

## Considerations

- The balance history does not have to be persisted anywhere. On webpage refresh it is valid for the history to be cleared.
- Please provide a way to share your project (StackBlitz, Heroku, or Github branch with instructions on how to run locally)
  - When submitting please provide a list of additional features you think may be useful for extending the ledger system
- Please provide the sample at least 3 hours prior to your interview and feel free to reach out with any questions