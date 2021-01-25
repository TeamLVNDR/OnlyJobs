import urllib
import requests
import pandas as pd
import os
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'}

# Google job search
def loadJobs():
    url = ('https://www.google.com/search?rlz=1C1CHBD_en-GBGB764GB764&sxsrf=ALeKk02hvTzDh0vo9EZtzEhPq00BzmMgZw:1611573037924&ei=LacOYLnzN86U8gLavbPACA&q=software+engineering+graduate&oq=jobs&gs_lcp=CgZwc3ktYWIQAzIECAAQQzIFCAAQkQIyBQgAEJECMgoIABCxAxCDARBDMgQIABBDMgQIABBDMgQIABBDMgIIADINCAAQsQMQgwEQyQMQQzIFCAAQkgM6BAgjECc6CwguELEDEMcBEKMCOggIABCxAxCDAToHCC4QJxCTAlCSlwJYlqACYJahAmgAcAJ4AIABW4gBwAKSAQE0mAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&uact=5&ibp=htl;jobs&sa=X&ved=2ahUKEwjfmqbo-bbuAhVMSsAKHZ-rDK0QutcGKAB6BAgKEAQ#fpstate=tldetail&htivrt=jobs&htilrad=-1.0&htidocid=Ql4cssGjAIftPMUtAAAAAA%3D%3D')
    driver = webdriver.Chrome()
    driver.get(url)
    label = driver.find_element_by_class_name("vWdgBe")
    label.click()
    count = 0
    
    while True:
        height = label.size["height"]
        label.send_keys(Keys.END)
        time.sleep(1)
        if height == label.size["height"]:
            break
    
    soup = BeautifulSoup(driver.page_source, "html.parser")
    driver.close()
    job_soup = soup.find_all('li', { 'class' : 'iFjolb'})
    return job_soup

def get_title(job_elem):
    title_elem = job_elem.find('div', class_='BjJfJf PUpOsf')
    title = title_elem.text.strip()
    return title

def get_company(job_elem):
    comp_elem = job_elem.find('div', class_='vNEEBe')
    company = comp_elem.text.strip()
    return company

job_elems = loadJobs()



jobs = set()
for job_elem in job_elems:
    jobs.add((get_company(job_elem), get_title(job_elem)))

print(jobs)
print(len(jobs))

