import time
from datetime import datetime
from mapStation import mapStation

def getURL():
    BASE_URL = "https://k.vnticketonline.vn/#/thongtinhanhtrinh/tau/"
    print("LOADING...")
    time.sleep(2)
    print("\n\n\n\n\n\n\n\nLOADING COMPLETE\n\n\n")
    user_departure_city = input("From: ")
    user_destination_city = input("To: ")
    today = datetime.today().strftime('%Y-%m-%d')
    user_departure_day = input("Date ("+today+") press ENTER for today: ")

    return BASE_URL+mapStation(user_departure_city)+'/'+mapStation(user_destination_city)+'/'+today