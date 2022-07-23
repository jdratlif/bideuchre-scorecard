# Bid Euchre Score Card

## Basic Scoring Info

This is a simple application for keeping score in Bid Euchre.
Bid Euchre is a variation on Euchre played in the midwest, itself having several variations.

In this version, games are played with 4 or 6 players with a standard pinochle deck.
When played with 4 players, each player receives 12 cards and the max bid is 12.
when played with 6 players, each player recieves 8 cards and the max bid is 8.

A bid consists of a number and a suit, or the two no-suit variants Low and High.
The number is the count of tricks that team must take to make their contract.
If a contact is not made, they are set, i.e. euchred.

There are two additional bids: partner's best and shoot the moon.
Partner's best and Shoot the Moon are effective max bids (8 or 12), but they have scoring bonuses or consequences based on whether the contract is met.

The team who did not win the contract wins a point for each trick won during the hand.

For the team that won the contract, their score depends upon the outcome of the contract.

If the contract was made successfully, they earn points in the same fashion as the opposing team.
For partner's best and shoot the moon, these points are doubled and quadrupled, respectively.

If they failed to make their contract, they lose points equal to the number of tricks they contracted for.
In partner's best and shoot the moon, this penalty is doubled and quadrupled, respectively.

Games are won by the team having 54 or more points, or lost by the team having -54 or fewer points.

## Scoring Examples

All scenarios are for 6-player games unless otherwise stated.

### Scenario: Successful Contract

Starting Score

* Team A: 12
* Team B: 15

Team A bids 5 hearts and takes 6 tricks.
Team B took the remaining 2 tricks.

Team A is awarded 6 points, and team B is awarded 2 points.

Final Score

* Team A: 18
* Team B: 17

### Scenario: Successful Contract (4 players)

Starting Score

* Team A: 22
* Team B: 40

Team A bids 9 low and takes 9 tricks.
Team B took the remaining 3 tricks.

Team A is awarded 9 points, and team B is awarded 3 points.

Final Score

* Team A: 31
* Team B: 43

### Scenario: Failed Contract

Starting Score

* Team A: 5
* Team B: 2

Team A bids 6 spades and takes 5 tricks.
Team B took the remaining 3 tricks.

Team A loses 6 points, and team B is awarded 3 points.

Final Score:

* Team A: -1
* Team B: 5

### Scenario: Successful Partner's Best

Starting Score

* Team A: 32
* Team B: 19

Team A bids partner's best in diamonds and takes all 8 tricks.

Team A is awarded 16 points: 8 tricks bid times 2 for partner's best.

Final Score

* Team A: 48
* Team B: 19

### Scenario: Successful Partner's Best (4 Players)

Starting Score

* Team A: 10
* Team B: 6

Team A bids partner's best in high and takes all 12 tricks.

Team A is awarded 24 points: 12 tricks bid times 2 for partner's best.

Final Score

* Team A: 34
* Team B: 6

### Scenario: Failed Partner's Best

Starting Score

* Team A: 36
* Team B: 29

Team A bids partner's best in spades and takes 7 tricks.
Team B takes the remaining trick.

Team A loses 16 points: 8 tricks bid times 2 for partner's best.
Team B is awarded 1 point.

* Team A: 20
* Team B: 30

### Scenario: Successful Shoot the Moon

Starting Score

* Team A: -4
* Team B: 48

Team A bids shoot the moon in hearts and takes all 8 tricks.

Team A is awarded 32 points: 8 tricks bid times 4 for shoot the moon.

Final Score

* Team A: 28
* Team B: 48

### Scenario: Failed Shoot the Moon (4 players)

Starting Score:

* Team A: 30
* Team B: 32

Team A bids shoot the moon in clubs and takes 10 tricks.
Team B takes the remaining 2 tricks.

Team A loses 48 points: 12 tricks bid times 4 for shoot the moon
Team B is awarded 2 points.

Final Score:

* Team A: -18
* Team B: 34
