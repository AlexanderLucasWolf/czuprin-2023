import requests
import json

api_url = "http://localhost:3000/api/devices"
response = requests.get(api_url)
content = response.text

content_json = json.loads(content)
print(content)

print(content_json[1]["local_device_id"])
