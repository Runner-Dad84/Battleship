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

Board
[
     a   b  c  d  e  f  g
   1 [0, 0, 0, 0, 0, 0, 0]
   2 [0, 0, 0, 0, 0, 0, 0]
   3 [0, 0, 0, 0, 0, 0, 0]
   4 [0, 0, 0, 0, 0, 0, 0]
   5 [0, 0, 0, 0, 0, 0, 0]
   6 [0, 0, 0, 0, 0, 0, 0]
   7 [0, 0, 0, 0, 0, 0, 0]
]

Actions
(1) Place Ships,
(2) First Player Turn,
  a-Check spot, 
   i- if empty record miss
   ii- if already a miss, alert player
   iii- if a ship record H on board AND add damage to ship AND check if ship sunk
  b-Check to see if all ships sunk,
(3) New Player Turn



index = current spot (number space of the ship index)
start = start position of ship
end = end of ship (start + ship.length)
Ex. adding positions
if (start + index < end) {run code}

Computer Smart
If computer misses, guess again randomly
If computer hits at [x, y] store as HIT
If computer hit last turn:
  Check [x+1, y]
  Check [x-1, y]
  Check [x, y+1]
  Check [x, y+1]
If hit again:
  Compare HIT [x, y] to [x2, y2]
  If x - x2 = 1
    Check [x2 - 1, y]
  If x - x2 = -1
    Check [x2 + 1, y]




Link for reference
Carrier
<a href="https://www.flaticon.com/free-icons/aircraft-carrier" title="aircraft carrier icons">Aircraft carrier icons created by max.icons - Flaticon</a>
Battleship
<a href="https://www.flaticon.com/free-icons/warship" title="warship icons">Warship icons created by Leremy - Flaticon</a>
Destroyer
<a href="https://www.flaticon.com/free-icons/ship" title="ship icons">Ship icons created by Leremy - Flaticon</a>
Submarine
<a href="https://www.flaticon.com/free-icons/submarine" title="submarine icons">Submarine icons created by Leremy - Flaticon</a>
Patro Boat
<a href="https://www.freepik.com/icon/ship_13966302#fromView=search&page=3&position=22&uuid=d57b3d53-e7c6-4a4f-b2e6-ff734f01d42a">Icon by Grafixpoint</a>
hit
<a href="https://www.flaticon.com/free-icons/explosion" title="explosion icons">Explosion icons created by Grafixpoint - Flaticon</a>
miss
<a href="https://www.freepik.com/icon/web_16632503#fromView=search&page=1&position=15&uuid=9843629e-d1c5-45e4-b6b2-b814221eb9a7">Icon by iconsmind</a>
Battleship2
<a href="https://www.flaticon.com/free-icons/warship" title="warship icons">Warship icons created by smashingstocks - Flaticon</a>
Destoryer2
<a href="https://www.freepik.com/icon/battleship_6175583#fromView=search&page=2&position=88&uuid=a90330a0-d278-4c8c-a00f-eb054f11ccaa">Icon by smashingstocks</a>
Submarine2
<a href="https://www.flaticon.com/free-icons/submarine" title="submarine icons">Submarine icons created by smashingstocks - Flaticon</a>
Patrol Boat2
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by smashingstocks - Flaticon</a>
Carrier2
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by smashingstocks - Flaticon</a>
Anchor
<a href="https://www.freepik.com/icon/anchor_5757848">Icon by Graphix's Art</a>
Anchor2
<a href="https://www.freepik.com/icon/anchor_9511982">Icon by Iconic Panda</a>
Main Ship
<a href="https://www.freepik.com/icon/transport_14756327#fromView=image_search_similar&page=1&position=9&uuid=2b2ae036-25aa-4a62-80fc-c311bb54d876">Icon by IconBaandar</a>
