from django.db import models

# Create your models here.

class JobListing(models.Model):
    company = models.CharField(max_length= 50)
    job_title = models.CharField(max_length= 50)


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
