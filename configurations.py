class BaseCongig(object):
	'''
	Base config class
	'''
	DEBUG = True
	TESTING = False
class ProductionConfig(BaseCongig):
	"""
	Production specific config
	"""
	DEBUG = False
class DevelopmentConfig(BaseCongig):
	"""
	Development environment specific configuration
	"""
	DEBUG = True
	TESTING = True

"""
 Now, we can use any of the preceding classes while loading the application’s configuration via from_object() in hello_template/run.py as:
from templates import app
#Load this config object for development mode
app.config.from_object('configurations.DevelopmentConfig')
app.run()
"""