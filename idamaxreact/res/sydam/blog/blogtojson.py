#coding=UTF-8
import sys, re

def main(date, title, author, thumbnail):

    ''' 
    Instruktioner:
    python blogtojson.py datum "titel" författare
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
        textfil = open(date +'.txt', 'r')
    except:
        print('Textfile to be read from was not found! Did you write your blogpost in <year><month><date>.txt format and name it correctly in cmd?')
        quit()

    jsonfil = open(r'json/' + date +'.json', 'w')

    jsonfil.write(r'''{
    "info": {

    "tripID": "sydam",
    ''')
    jsonfil.write(r'"date": "' + date + r'",' + '\n')
    jsonfil.write(r'"title": "' + title + r'",' + '\n')
    jsonfil.write(r'"author": "' + author + r'",' + '\n')
    jsonfil.write(r'"thumbnail": "' + thumbnail + r'"' + '\n')
    jsonfil.write(r'''
        },
        "content": [
        ''')

    while True:
        line = textfil.readline() # this reads through the lines of the file one at a time
        line = line.replace('\r', '')
        if line == '':
            break
        elif line == '\n' or line.startswith('\r'):
            continue
        elif re.search(im_pattern, line) or re.search(im_pattern2, line) or re.search(im_pattern3, line):
            print("Found image! " + line)
            jsonfil.write(r'{' + '\n')
            jsonfil.write(r'"image": "'  + line[:-1] + r'"' + '\n')
            jsonfil.write(r'},' + '\n')
        elif re.search(video_pattern, line):
            print("Found video! " + line)
            jsonfil.write(r'{' + '\n')
            jsonfil.write(r'"video": "'  + line[:-1] + r'"' + '\n')
            jsonfil.write(r'},' + '\n')
        else:
            print("Found paragraph! " + line)
            jsonfil.write(r'{' + '\n')
            jsonfil.write(r'"paragraph": "' + line[:-1] + r'"' + ' \n')
            jsonfil.write(r'},' + '\n')

    textfil.close()

# remove last , and \n for valid json file
    jsonfil.seek(-2,1)
    jsonfil.truncate()

    jsonfil.write(r'''									
        ]
    }''')

    jsonfil.close()

    print('''
    ..........................
    Done!
    Printed to ''' + date + '.json\n..........................')
    return;

if __name__ == "__main__":    
    if len(sys.argv) < 3:
        print('Syntax is: python blogtohtml.py date "title" author')
        quit()

    main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
