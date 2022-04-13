import xml.etree.ElementTree as ET

l = list()

data = open("LoadDmGa.xml",encoding="utf8").read()
xml = ET.fromstring(data)
bunch = xml.findall('./DMGa/SKeys')
exact_keys = xml.findall('./DMGa/MaGa')
exact_words = xml.findall('./DMGa/TenGa')

    

def mapStation(user_station):
    for common_words, exact_key, exact_word in zip(bunch,exact_keys,exact_words):
        EXACT_CODE = exact_key.text
        EXACT_WORD = exact_word.text
        if common_words.text is not None:
            tmp_list = common_words.text.split(', ')
            for word in tmp_list:
                if word == user_station:
                    return EXACT_CODE
        elif common_words.text is None:
            if EXACT_WORD == user_station:
                return EXACT_WORD