# %% [markdown]
# # Datahacks!!

# %%
import pandas as pd
import numpy as np
import os
import matplotlib.pyplot as plt

# %%
df = pd.read_csv('data.csv')
df

# %%
df = df.dropna() # dropping NaN rows
df

def get_period_name (period_str):
    period_list = period_str.split() # splitting by white space and gets list of strings
    period_name = period_list[0] + " " + period_list[1]
    return period_name

def get_period_to (period_str):
    period_list = period_str.split() # splitting by white space and gets list of strings
    if len(period_list) > 2:
        if "-" not in period_str:
            return period_list[2]
        else:
            period_years = period_list[2].split('-')
            return period_years[0]

def get_period_from (period_str):
    period_list = period_str.split() # splitting by white space and gets list of strings
    
    if len(period_list) > 2:
        if "-" not in period_str:
            return period_list[2]
        else:
            period_years = period_list[2].split('-')
            return period_years[1]

def str_to_num (length_str):
    str_list = length_str.replace('m','')
    return float(str_list)

names = df.get('period').apply(get_period_name)
to_year = df.get('period').apply(get_period_to)
from_year = df.get('period').apply(get_period_from)
int_len = df.get('length').apply(str_to_num)

cleaned_df = df.assign(period_name = names, to_years_ago = to_year, from_years_ago = from_year, len_as_int = int_len)

cleaned_df = cleaned_df.dropna()
cleaned_df

#get_period_to("Early Jurassic 199-189 million years ago")

# %%
cleaned_df.get("period_name").unique() # number of different period names

# %%
dino_length_df = cleaned_df.groupby(['period_name', "length"]).count().get(['name'])
dino_length_df