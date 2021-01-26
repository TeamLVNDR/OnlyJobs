import urllib
import requests
import os
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'}

# Google job search
def loadJobs():
    url = ('https://www.google.com/search?q=software+engineering+graduate+jobs+london&oq=software+en&aqs=chrome.1.69i59l3j69i57j69i65j69i60j69i61l2.3644j1j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwjnrdHfpLnuAhXRfMAKHcwoC-AQutcGKAB6BAgFEAQ&sxsrf=ALeKk02DM5snv_WQ-2K3GBT8mP5fIz0ZKQ:1611653392397#htivrt=jobs&htidocid=2e03-iJ3LYifeIbJAAAAAA%3D%3D&fpstate=tldetail')
    driver = webdriver.Chrome()
    driver.get(url)
    label = get_label(driver)
    
    list_bottom(label)
    scrape_jobs(driver)
    search_for(driver, "frontend developer graduate jobs london")
    driver.close()

def search_for(driver, search):
    searchbar = driver.find_element_by_id('hs-qsb')
    searchbar.clear()
    searchbar.send_keys(search + Keys.ENTER)
    label = get_label(driver)
    list_bottom(label)
    scrape_jobs(driver)

def get_label(driver):
    label = driver.find_element_by_class_name("vWdgBe")
    label.click()
    return label
    
def list_bottom(label):
    while True:
        height = label.size["height"]
        label.send_keys(Keys.END)
        time.sleep(1)
        if height == label.size["height"]:
            break

def scrape_jobs(driver):
    soup = BeautifulSoup(driver.page_source, "html.parser")
    job_soup = soup.find_all('li', { 'class' : 'iFjolb'})
    for job_elem in job_soup:
        jobs.add((get_company(job_elem), get_title(job_elem)))

def get_title(job_elem):
    title_elem = job_elem.find('div', class_='BjJfJf PUpOsf')
    title = title_elem.text.strip()
    return title

def get_company(job_elem):
    comp_elem = job_elem.find('div', class_='vNEEBe')
    company = comp_elem.text.strip()
    return company


jobs = set()

loadJobs()


print(jobs)
print(len(jobs))
