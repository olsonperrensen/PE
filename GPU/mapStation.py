import xml.etree.ElementTree as ET

l = list()

data = open("LoadDmGa.xml",encoding="utf8").read()
xml = ET.fromstring(data)
bunch = xml.findall('./DMGa/SKeys')
exact_keys = xml.findall('./DMGa/MaGa')

    

def mapStation(user_station):
    for common_words, exact_key in zip(bunch,exact_keys):
        if common_words.text is not None:
            tmp_list = common_words.text.split(',')
            for word in tmp_list:
                if word == user_station:
                    return exact_key.text