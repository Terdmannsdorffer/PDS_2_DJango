# Generated by Django 4.2.5 on 2023-09-12 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_alter_category_category_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='answer',
            name='explanation',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
