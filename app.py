from flask import Flask, request, jsonify
from flask_cors import CORS
import openpyxl
import os

app = Flask(__name__)
CORS(app)

# Load or create the Excel workbook
excel_file = 'contact_data.xlsx'

if not os.path.exists(excel_file):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.append(['Name', 'Email', 'Message'])  # Add column headers
    wb.save(excel_file)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Load the workbook and select the active sheet
    wb = openpyxl.load_workbook(excel_file)
    ws = wb.active

    # Append the form data
    ws.append([name, email, message])

    # Save the updated workbook
    wb.save(excel_file)

    return jsonify({'status': 'success', 'message': 'Form data saved successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
