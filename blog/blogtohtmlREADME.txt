1. Skriv bloggposten i ett notepaddokument med datumet som
namn (typ 20160628.txt). Samma datum som används för mappen till det datumets bilder
i img mappen.
I dokumentet ska paragrafer och bilder eller videor sättas på egna rader, såhär:
Endast videor .mp4 fungerar, om den är .mov, byt bara filändelse på videofilen till .mp4.

#####################

paragraf 1 talar om...

IMG_###.jpg

paragraf 2 talar om..

paragraf 3...

IMG_###.JPG

MOV_##.mp4

#####################
Det är viktigt att det kommer en ny rad efter den sista bilden eller paragrafen.
Bilderna behöver bara vara namnet som filen har under sin img/datum - mapp,
så länge denna mapp har samma datum som namn.


I kommandotolk skriv sedan:

python blogtohtml.py datum "titel" författare

då skapas bloggsidan med datumet som filnamn, med en titel som skriven ovan,
och av författaren längst ned.