#coding=UTF-8

import os, sys, traceback

'''
This creates a file allimages.json which has each folder name in img/ listed as a key, and to that key is attached list of strings of the names of the files inside that folder
'''

try:
	fil = open(r'allimages.json', "w+")

	fil.write(r'{' + '\n')
        bildmappar = os.listdir(os.getcwd() + '/img')

        for datum in bildmappar:
            fil.write('"' + datum + '": [\n')
            bilder = os.listdir(os.getcwd() + '/img/' + datum + '/')

            for bild in bilder:
                fil.write('"' + bild + '",\n')

            fil.seek(-2,1)
            fil.truncate()
            fil.write('\n' + r'],' + '\n')

        fil.seek(-2,1)
        fil.truncate()
        fil.write('\n' + r'}')

	fil.close()
	
	print('''
			.........
			Done!
			.........
			''')
	
except:
        traceback.print_exc()
	print("Something went wrong trying to create or open the file!")
	
