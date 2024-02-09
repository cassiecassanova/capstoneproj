import numpy as np
import pandas as pd
import random
import csv

products = ["Dog Bone", "Dog Brush", "Dog Collar", "Dog Bed", "Cat Toy", "Cat Treats"]
description = ["This product is wonderful!", "This product is pretty good at what its supposed to do.", "This product is the best."]

def get_product_name():
    return products[random.randint(0,5)]

def get_product_price():
    return float(random.randint(0, 99)) + .99

def get_product_popularity():
    return round(random.random(), 1)

def get_product_animal_category(name):
    return name[0:3]

def get_product_description(): 
    return description[random.randint(0,2)]

def generate_product(id_value):
    name = get_product_name()
    return [id_value, name, get_product_price(), get_product_description(), get_product_animal_category(name), get_product_popularity()]
# id, name, price, description, animal_category, popularity

with open('product_data.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['id', 'name', 'price', 'description', 'animal_category', 'popularity'])
    for n in range(1, 1001):
        writer.writerow(generate_product(n))
