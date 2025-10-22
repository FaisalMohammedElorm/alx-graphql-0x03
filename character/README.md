# Character Queries — Rick and Morty GraphQL API

This directory contains GraphQL queries for fetching specific characters from the Rick and Morty API using their IDs.

## Files
- `character-id-1.graphql` → Query for character with ID 1  
- `character-id-1-output.json` → Output of the query  
- ...and similarly for IDs 2, 3, and 4.

## Endpoint
https://rickandmortyapi.com/graphql

## Fields Fetched
- id
- name
- status
- species
- type
- gender

## Example Query
```graphql
query {
  character(id: 1) {
    id
    name
    status
    species
    type
    gender
  }
}
