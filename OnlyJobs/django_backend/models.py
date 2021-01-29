from django.db import models

# Create your models here.

class JobListing(models.Model):
    company = models.CharField(max_length= 200)
    job_title = models.CharField(max_length= 200)
    job_salary = models.CharField(max_length= 200)
    work_schedule = models.CharField(max_length= 200)
    technologies = models.CharField(max_length= 200)
    date_posted = models.CharField(max_length= 200)
    job_deadline = models.CharField(max_length= 200)
    #logo_url = models.URLField(  default= None)
    job_description = models.CharField(max_length= 2000)
    job_location = models.CharField(max_length= 200)
    # job_url_1 = models.URLField(default= None)
    # job_url_2 = models.URLField(default= None)
    # job_url_3 = models.URLField(default= None)


    # to add
        #job_url = models.URLField()
        #job_date
        #job_salary
        # when the last update of the model was made
    
    def __str__(self):
        return "(%s)" % (self.company)


# other type of possible model names
    # def __str__(self):
    #     return "(%s,%s)" % (self.company, self.job_title)
