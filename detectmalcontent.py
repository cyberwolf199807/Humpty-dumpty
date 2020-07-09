
from selenium import webdriver
import requests
from bs4 import BeautifulSoup
import sys
# import nude


def content(url):
    #html = urllib.request.urlopen(url).read()
    html = requests.get(url).text
    soup = BeautifulSoup(html, features="html.parser")

    # kill all script and style elements
    for script in soup(["script", "style"]):
        script.extract()    # rip it out

    # get text
    text = soup.get_text()

    # break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # drop blank lines
    text = '\n'.join(chunk for chunk in chunks if chunk)

    return text

site = (sys.argv[1])
print("I reached here");
list_of_words = ['smut', 'bawdiness', 'dirt', 'erotica', 'filth', 'indecency', 'porn' ,'hamster','xvideos','xxxvideos',\
                 'porno', 'sexploitation', 'X-rated material', 'X-rated movie', 'adult material', 'adult movie',\
                 'dirty movie', 'girlie magazine', 'hard-core pornography', 'obscene materials', 'porno film',\
                 'sexually explicit material', 'skin flick', 'soft-core pornography', 'stag film', 'bald', 'naked',\
                 'dishabille', 'raw', 'skin', 'au naturel', 'bare', 'bare-skinned', 'buck naked', 'disrobed', 'exposed',\
                 'in birthday suit', "in one's skin", 'in the altogether', 'peeled', 'stark', 'stark-naked', 'stripped',\
                 'unattired', 'unclad', 'unclothed', 'uncovered', 'undraped', 'undressed', 'wearing only a smile',\
                 'without a stitch', 'fuck', 'rape']

bad_words = ['Pornstar', 'Porn', 'Amature', 'Tabbo', 'Sex', 'Cheating', 'Maid', 'Wet', 'Pussy', 'Gangbang', 'Roleplay',\
             'Squirting', 'Anal', '69', 'Rough', 'Cock', 'cock', 'Milf', 'Mature', 'pov', 'Pov', 'POV', 'Blow job',\
             'Blow Job', 'blow job', 'cum', 'dick', 'Dick', 'dildo', 'Dildo', 'orgasm', 'Orgasm', 'penius', 'Penius',\
             'slut', 'Slut', 'Bitch', 'bitch', 'asshole', 'Asshole']
temp = 0
add = 0
a = 0
site_data = ""
name2 = ""
dot_position = 0
last_name_of_site = ""
words_that_site_contains = []

for i in range(0, len(list_of_words)):
    if list_of_words[i] in site:
        temp = temp + 1
        break
    else:
        continue

if temp != 0:
    print("This site contains pornography content & may contain bad word. We can't open it.")

elif temp == 0:
    try:
        site_data = content(site)

        a = 1
    except Exception:
        print("Enter valid URL or connect to VPN.")
        pass

    if a == 1:
        try:
            for i in range(0, len(bad_words)):
                if bad_words[i] in site_data:
                    add = add + 1
                    words_that_site_contains.append(bad_words[i])

            if add >= 10:
                print("This site contains pornography content & may contain bad words. We can't open it.")
                print("This site contains:",words_that_site_contains)
            else:
                if "https" in site:
                    try:
                        name1 = site.replace("https://","")
                    except Exception:
                        pass
                elif "http" in site:
                    try:
                        name1 = site.replace("http://", "")
                    except Exception:
                        pass
                # solve it......
                for pos in range(0,len(name1)):
                    if name1[pos] == ".":
                        dot_position = pos
                        break

                for i in range(dot_position, len(name1)):
                    last_name_of_site = last_name_of_site + name1[i]

                name2 = name1.replace(last_name_of_site, "")
                final_name = name2.replace(name2, name2.upper())

                print("Enjoy " + final_name)
                driver = webdriver.Chrome('chromedriver.exe')
                driver.get(site)
        except Exception:
            print("The entered Url is safe")
