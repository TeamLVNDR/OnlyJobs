from django_backend.models import JobListing
import sys
from . import scraper

test = scraper.jobs

def run():
    JobListing.objects.all().delete()
    for element in test:
        print(element)
        p, created = JobListing.objects.get_or_create(company= element[0], job_title = element[1], date_posted = element[2])




