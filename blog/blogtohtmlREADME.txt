1. Skriv bloggposten i ett notepaddokument med datumet som
namn (typ 20160628.txt). Samma datum som anv�nds f�r mappen till det datumets bilder
i img mappen.
I dokumentet ska paragrafer och bilder eller videor s�ttas p� egna rader, s�h�r:
Endast videor .mp4 fungerar, om den �r .mov, byt bara fil�ndelse p� videofilen till .mp4.

#####################

paragraf 1 talar om...

IMG_###.jpg

paragraf 2 talar om..

paragraf 3...

IMG_###.JPG

MOV_##.mp4

#####################
Det �r viktigt att det kommer en ny rad efter den sista bilden eller paragrafen.
Bilderna beh�ver bara vara namnet som filen har under sin img/datum - mapp,
s� l�nge denna mapp har samma datum som namn.


I kommandotolk skriv sedan:

python blogtohtml.py datum "titel" f�rfattare

d� skapas bloggsidan med datumet som filnamn, med en titel som skriven ovan,
och av f�rfattaren l�ngst ned.