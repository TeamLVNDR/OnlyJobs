from django.db import models

# Create your models here.

class JobListing(models.Model):
    company = models.CharField(max_length= 50)
    job_title = models.CharField(max_length= 50)
    job_salary = models.PositiveIntegerField()
    work_schedule = models.CharField(max_length= 10)
    technologies = models.CharField(max_length= 50)
    date_posted = models.CharField(max_length= 50)

    logo_url = models.URLField()
    job_description = models.CharField(max_length= 50)

    job_location = models.CharField(max_length= 50)

    job_url_1 = models.URLField()
    job_url_2 = models.URLField()
    job_url_3 = models.URLField()


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
