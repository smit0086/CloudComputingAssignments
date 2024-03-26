import bcrypt
import json
import requests
import base64

def lambda_handler(event, context):
    input_text = event.get('value', '')
    course_uri = event.get('course_uri', '')

    # Ensure input_text is converted to bytes
    input_text_bytes = input_text.encode('utf-8')
   
    # Calculate the bcrypt hash
    bcrypt_hash = bcrypt.hashpw(input_text_bytes, bcrypt.gensalt(12))

    # Encode the bcrypt hash to base64 to make it JSON serializable
    bcrypt_hash_encoded = bcrypt_hash.decode('utf-8')
    
    headers = {
        'Content-Type': 'application/json'
    }
    payload = {
        "banner": "B00963945",
        "arn": "arn:aws:lambda:us-east-1:637423445974:function:hashingBCRYPT",
        "action": "bcrypt",
        "result": bcrypt_hash_encoded,  # Use the base64 encoded hash
        "value": input_text
    }
    
    response = requests.post(course_uri, data=json.dumps(payload), headers=headers)
    
    return payload