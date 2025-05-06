import { User } from '~/type'

export const users: User[] = [
  {
    "id": 101,
    "name": "Alice",
    "email": "alice@example.com",
    "password": "$2a$12$qjyDFCEuKAoHNLqT.aR18.pxbRbp4.kCEkfwB5PSdqCVsfkwdcTjq",
    "pass_init": "abc",
    "rank": 5,
    "scope": [
      "users:list",
      "airports:list",
      "flights:create"
    ]
  },
  {
    "id": 102,
    "name": "Bob",
    "email": "bob@example.com",
    "password": "$2a$12$N4xdLdYb2.MsfdtVJOYgauJurR6i.8pc98bgFXqIzuNm8ejUQvxxS",
    "pass_init": "12c",
    "rank": 2,
    "scope": [
      "users:list",
      "airports:list"
    ]
  },
  {
    "id": 103,
    "name": "Charlie",
    "email": "charlie@example.com",
    "password": "$2a$12$N4xdLdYb2.MsfdtVJOYgauJurR6i.8pc98bgFXqIzuNm8ejUQvxxS",
    "pass_init": "12c",
    "rank": 3,
    "scope": [
      "flights:create",
      "airports:list"
    ]
  },
  {
    "id": 104,
    "name": "Diana",
    "email": "diana@example.com",
    "password": "$2a$12$qjyDFCEuKAoHNLqT.aR18.pxbRbp4.kCEkfwB5PSdqCVsfkwdcTjq",
    "pass_init": "abc",
    "rank": 4,
    "scope": [
      "users:view",
      "airports:list"
    ]
  }
]
