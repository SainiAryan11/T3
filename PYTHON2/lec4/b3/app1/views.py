from urllib import request

from django.shortcuts import render

import pandas as pd
import numpy as np
from bs4 import BeautifulSoup

# Create your views here.

def dataframe(request):
    with open('demo.html','r',encoding='utf-8') as f:
        res = f.read()
    soup=BeautifulSoup(res,'html.parser')

    d = {'Name':[],'ROM':[],'RAM':[],'color':[],'Stars':[],'Reviews':[],'Rear Camera':[],'Front Camera':[],'Old_price':[],'New_price':[],'discount':[],'rating':[],'display(cm)':[],'display(inch)':[]}
    box = soup.find_all('div',class_='yKfJKb row')
    print(len(box))

    for i in box:
        d['Name'].append(i.find('div',class_='KzDlHZ').text.strip().split('(')[0].strip())
        d['color'].append(i.find('div',class_='KzDlHZ').text.strip().split('(')[1].split(',')[0])
        d['rating'].append(i.find('span',class_='Wphh3N').text.strip().split('&')[0].split()[0])
        d['Reviews'].append(i.find('span',class_='Wphh3N').text.strip().split('&')[1].split()[0])
        d['Stars'].append(i.find('div',class_='XQDdHH').text.strip())
        d['RAM'].append(i.find('ul',class_='G4BRas').text.strip().split('|')[0])
        d['ROM'].append(i.find('ul',class_='G4BRas').text.strip().split('|')[1].split('ROM')[0])
        d['display(cm)'].append(i.find('ul',class_='G4BRas').text.strip().split('ROM')[1].split()[0])
        d['display(inch)'].append(i.find('ul',class_='G4BRas').text.strip().split('ROM')[1].split('(')[1].split()[0])
        d['Rear Camera'].append(i.find('ul',class_='G4BRas').text.split('Display')[1].split('|')[0])
        d['Front Camera'].append(i.find('ul',class_='G4BRas').text.split('Display')[1].split('|')[1].split()[0])
        try:
            d['Old_price'].append(i.find('div',class_='yRaY8j ZYYwLA').text.split('₹')[1])
        except:
            d['Old_price'].append(np.nan)
        d['New_price'].append(i.find('div',class_='Nx9bqj _4b5DiR').text.split('₹')[1])
        try:
            d['discount'].append(i.find('div',class_='UkUFwK').text.split()[0])
        except:
            d['discount'].append(np.nan)
        
    df = pd.DataFrame(d)

    return render(request, 'home.html',{"df":df})

