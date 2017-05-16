#coding=UTF-8

import sys, re

if len(sys.argv) < 3:
	print('Syntax is: python blogtohtml.py date "title" author')
	quit()
else:
	pass
	
''' 
Instruktioner:
python blogtohtml.py datum "titel" författare
-> då bör texten finnas i filen datum.txt
och då blir titeln på inlägget "titel"
och inlägget skrivet av författare
 '''

# For searching the textfile and seeing if its an image or vid, instead of a paragraph
im_pattern = r'.jpg'
im_pattern2 = r'.JPG'
im_pattern3 = r'.PNG'
video_pattern = r'.mp4'

try:
	textfil = open(sys.argv[1] +'.txt', 'r')
except:
	print('Textfile to be read from was not found! Did you write your blogpost in <year><month><date>.txt format and name it correctly in cmd?')
	quit()
	
htmlfil = open(sys.argv[1] +'.html', 'w+')

htmlfil.write(r'''<!DOCTYPE html>

<html>
	<head>
		<meta charset = "ansi">
		<title>Max & Ida</title>
		<link rel = "stylesheet" href="../css/normalize.css">
		<link href='https://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400,400italic,700,700italic,800' rel='stylesheet' type='text/css'>
		<link rel = "stylesheet" href ="../css/main.css">
		<link rel ="stylesheet" href ="../css/responsive.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<header>
			<a href="index.html" id = "logo">
				<h1>Max & Ida</h1>
				<h2>... i Sydamerika!</h2>
			</a>
			<nav>
				<ul>
					<li><a href="../index.html">Story</a></li>
					<li><a href="../bilder.html">Bilder</a></li>
				</ul>
			</nav>
		</header>
		<div id="wrapper">
			<div id="blogpost">
				<section>
					''')
htmlfil.write(r'<!-- Generated by blogtohtml.py script (by Max) -->' + '\n')
htmlfil.write(r'<h3>' + sys.argv[2] + r'</h3>' + '\n')

while True:
	line = textfil.readline() # this reads through the lines of the file one at a time
	if line == '':
		break
	elif line == '\n':
		continue
	elif re.search(im_pattern, line) or re.search(im_pattern2, line) or re.search(im_pattern3, line):
		print("Found image! " + line)
		htmlfil.write(r'<img src="../img/' + sys.argv[1] + r'/' + line[:-1] + r'" alt="">' + '\n')
	elif re.search(video_pattern, line):
		print("Found video! " + line)
		htmlfil.write(r'''<video controls>
						<source src="{}" type="video/mp4">
						Video not supported by browser or not uploaded yet to server!
					</video>'''.format(r'../img/' + sys.argv[1] + r'/' + line[:-1]))
	else:
		print("Found paragraph! " + line)
		htmlfil.write(r'<p>' + line[:-1] + r'</p>' + ' \n')

textfil.close()

htmlfil.write(r'''
					<p class="av">skrivet av '''+ sys.argv[3] + r'</p>' + '\n')

htmlfil.write(r'					<!-- Done -->')
					
htmlfil.write(r'''									
				</section>
			</div>
		</div>
			<footer>
				<a href="https://www.facebook.com/max.korlinge">
					<img src="../img/fb.jpg" alt="Facebook icon" class = "social-icon">
				</a>
				<a href="https://www.twitter.com/maxkorlinge">
					<img src="../img/twitter.png" alt="Twitter icon" class= "social-icon">
				</a>
				<a href="http://www.threemuskytears.se">
					<img src="../img/musketeer.jpg" alt="ThreeMuskyTears icon" class="social-icon">
				</a>
				<p>&copy; 2016 Max Körlinge.</p>
			</footer>
	</body>
</html>
''')

htmlfil.close()

print('''
..........................
Done!
Printed to ''' + sys.argv[1] + '.html\n..........................')