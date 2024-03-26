import hashlib
import json
import requests

def lambda_handler(event, context):
    input_text = event.get('value', '')
    course_uri = event.get('course_uri', '')
   
    # Calculate the md5 hash
    md5_hash = hashlib.md5(input_text.encode()).hexdigest()
    
    
    headers = {
        'Content-Type': 'application/json'
    }
    payload = {
        "banner": "B00963945",
        "arn": "arn:aws:lambda:us-east-1:637423445974:function:hashingMD5",
        "action": "md5",
        "result": md5_hash,
        "value": input_text
    }
    
    response = requests.post(course_uri, data=json.dumps(payload), headers=headers)
    
    return payload
