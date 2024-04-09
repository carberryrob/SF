# Enable logic before blocks section

try:
     entity = entity_list.split(';')
     entity_name = entity[0]
     card_www = entity[1]
     card_tagline = entity[2]
except:
     pass

if entity_name == 'Atradius Collections, Inc.':
  cardback = 'Collections Logo.pdf'
else:
  cardback = 'Regular Logo atradius.pdf'

