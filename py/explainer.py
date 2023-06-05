import lime
import numpy as np
from lime import lime_tabular
from sklearn.linear_model import LogisticRegression
import pandas as pd
import os
import json

directory = os.getcwd()

def explainer(x_train, y_train, input): # add extra input parameter
    # store each into database
    
    # flow
    # get user input (from form -> post request <json>) -> convert to correct format (to <???>)->
    # apply to explain instance {swap x_test}-> extract data (???) ->
    # format data for display {check output of explainer w/o convert to html} & store result (reconvert to json -> post request)
    x_train_df = pd.DataFrame(x_train)
    y_train_df = pd.DataFrame(y_train)
    y_train_sr = y_train_df.iloc[:,0]
    input_sr = pd.Series(input)
    #print(x_train_df)
    #print(input_sr)
    lr = LogisticRegression(C = 1.0, penalty = 'l2', solver = 'newton-cg')
    lr.fit(x_train_df.values, y_train_sr)
    #lr_score = lr.score(x_test, y_test)

    #y_pred = lr.predict(x_test)
    #print("Logistic Regression Accuracy", accuracy_score(y_test, y_pred))
    #print("Confusion Matrix: \n", confusion_matrix(y_test, y_pred)) 
    #print("Classification Report Logistic Regression\n", classification_report(y_test, y_pred))

    explainer = lime_tabular.LimeTabularExplainer(
        training_data=np.array(x_train_df),
        feature_names=x_train_df.columns,
        class_names=[0,1],
        mode='classification'
    )

    exp = explainer.explain_instance(
        data_row=input_sr, # swap to input
        predict_fn=lr.predict_proba
    )
    #exp.save_to_file(directory + "/lime_depression_lr_iloc2.html")
    result = exp.as_html()
    result2 = exp.as_list()
    resarray = [str(result), str(result2)]
    return resarray

    #print(x_test.iloc[4])
    # 
    # check yung laman ng exp -> check kung may pwede gawin para macustomize 