import hashlib
import json
import requests

def lambda_handler(event, context):
    input_text = event.get('value', '')
    course_uri = event.get('course_uri', '')
   
    # Calculate the SHA256 hash
    sha256_hash = hashlib.sha256(input_text.encode()).hexdigest()
    
    
    headers = {
        'Content-Type': 'application/json'
    }
    payload = {
        "banner": "B00963945",
        "arn": "arn:aws:lambda:us-east-1:637423445974:function:hashingSHA256",
        "action": "sha256",
        "result": sha256_hash,
        "value": input_text
    }
    
    response = requests.post(course_uri, data=json.dumps(payload), headers=headers)
    
    return payload
