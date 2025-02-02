from django.db import models

class Music(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    song_file = models.FileField(upload_to='songs/')
    song_img = models.ImageField(upload_to='images/')
    release_date = models.DateField()

    def __str__(self):
        return self.title
