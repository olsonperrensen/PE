from tokenize import Token
from urllib import response
from xmlrpc.client import ResponseError
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, filters, viewsets
from . import serializers, models, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
import datetime

#selenium
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import json
from datetime import datetime



# Create your views here.
class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('last_name', 'email',)
    def get_queryset(self):
        return self.queryset.filter(email=self.request.user)

class UserLoginApiView(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

class SearchTrainViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.SearchTrainSerializer
    queryset = models.SearchTrain.objects.all()
    authentication_classes = (TokenAuthentication,)
    @action(detail=False, methods=['POST'])
    def search(self, request):
        if ('departure' in request.data) and ('destination' in request.data) and ('date' in request.data):
            user = request.user
            departure = request.data['departure']
            destination = request.data['destination']
            date = request.data['date']
            if user.is_authenticated:
                models.History.objects.create(customer = user, departure = departure, destination = destination, date = date)
            try:
                train = models.SearchTrain.objects.get(departure = departure, destination = destination, date = date)
                serializer = serializers.SearchTrainSerializer(train, many=False)
                response = {'message':'found', 'result':serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                train = models.SearchTrain.objects.create(departure = departure, destination = destination, date = date)
                BASE_URL = 'https://k.vnticketonline.vn/#/thongtinhanhtrinh/gadi'
                options = Options()
                options.add_argument('disable-infobars')
                options.add_experimental_option('excludeSwitches', ['enable-logging'])
                driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
                driver.get(BASE_URL)
                driver.implicitly_wait(15)
                departure_input = driver.find_element(By.CSS_SELECTOR, '#txtgadi')
                for i in departure:
                    departure_input.send_keys(i)
                    time.sleep(0.05)
                departure_input.send_keys(Keys.ARROW_DOWN)
                departure_input.send_keys(Keys.ENTER)
                destination_input = driver.find_element(By.CSS_SELECTOR, '#txtGaDen')
                for i in destination:
                    destination_input.send_keys(i)
                    time.sleep(0.05)
                destination_input.send_keys(Keys.ARROW_DOWN)
                destination_input.send_keys(Keys.ENTER)
                date = '2022-06-11'
                link = f"{driver.current_url.replace('date', 'tau')}/{date}"
                driver.get(link)
                time.sleep(3)
                page_source = driver.page_source
                soup = BeautifulSoup(page_source, 'html.parser')
                trainL = soup.select('.list-group h4')
                print(len(trainL))
                count = 1
                number = 1
                column = 1
                if trainL:
                    while count <= len(trainL):
                        driver.get(link)
                        time.sleep(3)
                        page_source = driver.page_source
                        soup = BeautifulSoup(page_source, 'html.parser')
                        trainL = soup.select('.list-group h4')
                        train_type = trainL[count-1].get_text()
                        departureTime = soup.select(f'.list-group > a > p:nth-child(4)')
                        departure_date = datetime.strptime(departureTime[count-1].get_text().strip("()").split(" ")[0], '%d/%m/%Y').date()
                        departure_time = datetime.strptime(departureTime[count-1].get_text().strip("()").split(" ")[1], '%H:%M').time()
                        arrivalTime = soup.select(f'.list-group > a > p:nth-child(6)')
                        arrival_date =datetime.strptime(arrivalTime[count-1].get_text().strip("()").split(" ")[0], '%d/%m/%Y').date()
                        arrival_time = datetime.strptime(arrivalTime[count-1].get_text().strip("()").split(" ")[1], '%H:%M').time()
                        trainType = models.Train.objects.create(
                            trip=train,
                            train_type=train_type,
                            departure_date = departure_date,
                            departure_time = departure_time,
                            arrival_date = arrival_date,
                            arrival_time = arrival_time
                        )
                        check = soup.select('div.list-group > a')
                        if len(check) > 3 and count == 4:
                            number = 1
                            column = 2
                        btn = driver.find_element(By.CSS_SELECTOR, f'.col-sm-6:nth-child({column}) > .list-group > a:nth-child({number})')
                        btn.click()
                        time.sleep(2)
                        page_source = driver.page_source
                        soup = BeautifulSoup(page_source, 'html.parser')
                        row = soup.select('div.col-md-7 tr')
                        for i in row[1:]:
                            col = i.select('span')
                            models.JourneyInfo.objects.create(
                                train_type = trainType,
                                station = col[0].get_text(),
                                distance = int(col[1].get_text()),
                                departure_date = datetime.strptime(col[2].get_text(), '%d/%m/%Y').date(),
                                departure_time = datetime.strptime(col[4].get_text(), '%H:%M').time(),
                                arrival_time = datetime.strptime(col[3].get_text(), '%H:%M').time(),
                            )
                        number += 1
                        count += 1

                serializer = serializers.SearchTrainSerializer(train, many=False)
                response = {'message':'create', 'result':serializer.data}
                return Response(response, status=status.HTTP_200_OK)
                  
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


    def create(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)    

class TrainViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TrainSerializer
    queryset = models.Train.objects.all()
    def create(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)

class HistoryViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.HistorySerializer
    queryset = models.History.objects.all()
    permission_classes = (
        permissions.UpdateOwnHistory,
        IsAuthenticated,
    )
    def get_queryset(self):
        return self.queryset.filter(customer=self.request.user).order_by('-id')
    def create(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)

class JourneyViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.JourneySerializer
    queryset = models.JourneyInfo.objects.all()
    def create(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)

        
class TicketViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.TicketSerializer
    queryset = models.Ticket.objects.all()
    permission_classes = (
        permissions.UpdateOwnHistory,
        IsAuthenticated,
    )
    def get_queryset(self):
        return self.queryset.filter(customer=self.request.user).order_by('-id')
    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)
    def update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def partial_update(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    def destroy(self, request, *args, **kwargs):
        return Response(status=status.HTTP_400_BAD_REQUEST)

