from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

# Replace with your OAuth 2.0 credentials file path
creds = Credentials.from_authorized_user_file("credentials.json", ["https://www.googleapis.com/auth/gmail.readonly"])

# Create a Gmail API client
service = build("gmail", "v1", credentials=creds)

# Replace with the ID of the email you want to retrieve
email_id = "email_id_here"

# Retrieve the email message
message = service.users().messages().get(userId="me", id=email_id, format="full").execute()

# Get the subject of the email
subject = None
for header in message["payload"]["headers"]:
    if header["name"] == "Subject":
        subject = header["value"]
        break

print(f"Email subject: {subject}")
