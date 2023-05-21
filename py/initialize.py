import pandas as pd
import numpy as np
import os

from pandas import DataFrame
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.feature_selection import VarianceThreshold
from sklearn.model_selection import train_test_split

#to get the current working directory
directory = os.getcwd()
df = pd.read_csv(directory + "/py/dataset.csv")

# Selecting duplicate rows except first 
# occurrence based on all columns
# saves the duplicates in the dataframe called dup
df_nodup = df.drop_duplicates()
df_nodup.to_csv(directory + "/py/dataset-nodup.csv")

categorical_cols = df_nodup.columns
categorical_cols = categorical_cols.drop("DEPRESSED")

df_nodup = df_nodup.reset_index(drop=True)

df_nodupLE = df_nodup.copy(deep=True)

number = LabelEncoder()
for i in categorical_cols:
    df_nodupLE[i] = number.fit_transform(df_nodupLE[i].astype(str))

orig_cols = list(df_nodupLE.columns)

# Let's apply StandardScaler() to the dataset with no outliers
trans = StandardScaler()
df_nodupLE = trans.fit_transform(df_nodupLE)

# make a function that gets the conversion from non-standard to standard
# store this to the database at first run

# convert the array back to a dataframe
df_nodupLE = DataFrame(df_nodupLE)

# reassign the column names
df_nodupLE.columns = orig_cols

df_nodupLE["DEPRESSED"] = df_nodup["DEPRESSED"]

selector = VarianceThreshold()
selector.fit_transform(df_nodupLE)

y=df_nodupLE['DEPRESSED']
x=df_nodupLE.drop(['DEPRESSED'], axis=1)

z=df_nodup.drop(['DEPRESSED'], axis=1)

unique = []
for col in x:
    colObj = x[col]
    unique.append(np.unique(colObj.values, return_index=True))

i = 0
for col in z:
    colObj = z[col]
    tmp = []
    for j in range(len(unique[i][1])):
        tmp.append(colObj[unique[i][1][j]])
    unique[i] += (unique[i][0].tolist(), )
    unique[i] += (tmp, )
    unique[i] = unique[i][:1] + unique[i][2:]
    unique[i] = unique[i][1:]
    i += 1

uni_length = len(unique)
len_list = []

for i in range(len(unique)):
    len_list.append(len(unique[i][0]))

x_train,x_test,y_train,y_test=train_test_split(x, y,test_size=0.30,random_state=14)

ytr = y_train.tolist()
yte = y_test.tolist()
ytr_len = len(ytr)
yte_len = len(yte)

xtr = x_train.values.tolist()
xte = x_test.values.tolist()
xtr_len = len(xtr)
xte_len = len(xte)

# convert x_train, x_test, y_train, and y_test to list
# get length of x and y, then insert to db