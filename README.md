# Battleship
Battleship and TDD

Ships           Length
1	Carrier	    5
2	Battleship	4
3	Destroyer	3
4	Submarine	3
5	Patrol Boat	2

Board identifiers
0 = water
X = miss
! = hit ship
C = carrier (not hit)
B = battleship (not hit)
D = destoryer (not hit)
S = submarine (not hit)
P = patrol (not hit)

Actions
(1) Place Ships,
(2) First Player Turn,
  a-Check spot, 
   i- if empty record miss
   ii- if already a miss, alert player
   iii- if a ship record H on board AND add damage to ship AND check if ship sunk
  b-Check to see if all ships sunk,
(3) New Player Turn




