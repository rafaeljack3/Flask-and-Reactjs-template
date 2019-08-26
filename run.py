#FONTE:
#https://itnext.io/a-template-for-creating-a-full-stack-web-application-with-flask-npm-webpack-and-reactjs-be2294b111bd
from app import app

#Load this config object for development mode
app.config.from_object('configurations.DevelopmentConfig')
app.run()