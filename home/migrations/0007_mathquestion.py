# Generated by Django 4.2.5 on 2023-09-12 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_answer_explanation'),
    ]

    operations = [
        migrations.CreateModel(
            name='MathQuestion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=200)),
                ('answer', models.IntegerField()),
            ],
        ),
    ]
