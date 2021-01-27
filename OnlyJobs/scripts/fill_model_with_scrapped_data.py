# input data {('Probe', 'GRADUATE APPLICATION ENGINEER (Electronics)'), ('Polytec Personnel Ltd', 'Graduate Electronics Engineer'), ('Raytheon Technologies', 'Sta')}
from django_backend.models import JobListing
import sys
from . import scraper

test = scraper.jobs

def run():
    JobListing.objects.all().delete()
    for element in test:
        print(element)
        p, created = JobListing.objects.get_or_create(company= element[0], job_title = element[1])




