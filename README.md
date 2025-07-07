# 📄 eSign Workflow - NestJS Backend Assignment

This project implements a simple **eSign (Electronic Signature) workflow backend** using **NestJS**. It simulates a realistic, multi-party e-signing process for a PDF file involving **three roles**.

---

## 🛠️ Tech Stack

- **Backend Framework**: NestJS
- **File Upload Handling**: Multer
- **Unit Testing**: Jest
- **PDF Preview**: Static preview via browser
- **eSign API**: Simulation (Documenso reference only)

---

## 📦 Features Implemented

| Feature             | Description                                           |
|---------------------|-------------------------------------------------------|
| 🔼 PDF Upload      | Upload PDF using `POST /pdf/upload`                   |
| 👀 PDF Preview     | Preview uploaded PDF via `GET /pdf/preview/:filename` |
| ✍️ Simulate eSign  | Simulate a flow where Role 1 uploads, Role 2 signs & forwards, Role 3 signs |
| ⚙️ Backend-Only    | No frontend required                                  |
| ✅ Unit Tests      | Simple test cases using Jest                          |

---

## 🔁 Simulated Signer Workflow

This project simulates a **step-by-step signer flow** with role-based logic:

1. **Role 1**
   - Uploads the PDF
   - Adds signing tags for Role 2 and Role 3

2. **Role 2**
   - Receives PDF
   - Digitally signs
   - Adds Role 3’s email and forwards

3. **Role 3**
   - Final signer in the chain

💡 This simulation helps demonstrate backend logic for a real-world signing pipeline.

---

## 🧪 API Endpoints

### 1. 📤 Upload PDF  
**POST** `/pdf/upload`

- **Request Type**: `multipart/form-data`  
- **Form Field**: `file` (PDF file)

✅ **Returns**:
\`\`\`json
{
  "message": "PDF uploaded successfully",
  "filePath": "uploads/file-<timestamp>.pdf"
}
\`\`\`

---

### 2. 👁️ Preview PDF  
**GET** `/pdf/preview/:filename`

Example:
\`\`\`
/pdf/preview/file-123456.pdf
\`\`\`

✅ Opens/downloads the PDF.

---

### 3. ✍️ Submit for eSign (Simulated)  
**POST** `/esign/submit`

**JSON Body**:
\`\`\`json
{
  "pdfPath": "uploads/file-xxx.pdf",
  "role1Email": "a@domain.com",
  "role2Email": "b@domain.com",
  "role3Email": "c@domain.com"
}
\`\`\`

✅ **Returns**:
\`\`\`json
{
  "message": "eSign flow simulated successfully",
  "submittedFile": "uploads/file-xxx.pdf",
  "signerFlow": [
    {
      "step": 1,
      "role": "Role1",
      "email": "a@domain.com",
      "action": "Uploaded PDF and added tags for Role2 and Role3"
    },
    {
      "step": 2,
      "role": "Role2",
      "email": "b@domain.com",
      "action": "Signed and forwarded to Role3"
    },
    {
      "step": 3,
      "role": "Role3",
      "email": "c@domain.com",
      "action": "Signed the document"
    }
  ],
  "status": "Simulated and ready for signature"
}
\`\`\`


⚠️ Note on Documenso API
Although the assignment mentions documenso.com, it is not publicly hosted.

Therefore:

✅ This backend simulates eSign API calls
🧪 Integration-ready: Real eSign API can be integrated later

---

🚀 How to Run

```bash
git clone https://github.com/your-username/esign-workflow.git
cd esign-workflow
npm install
mkdir uploads
npm run start
```

---

🧪 Run Unit Tests (Optional)
Simple unit tests included for the controller and service.

```bash
npm run test
```

✅ Example Output:
PASS  src/app.controller.spec.ts
PASS  src/esign/esign.service.spec.ts

---

## 📁 Folder Structure (Simplified)

```
src/
 ┣ pdf/             ← Upload & preview logic
 ┣ esign/           ← Simulate signature flow
 ┣ app.controller.ts
 ┣ app.module.ts
uploads/             ← Uploaded PDF storage


```

✅ Final Output
This backend-only app fulfills the following:

✅ Handles PDF upload & preview
✅ Simulates signer logic with Role 1 → Role 2 → Role 3
✅ Responds with flow details
✅ Is fully testable via Postman and unit tests

---

---

## ✅ Conclusion

This backend app simulates a full PDF eSign flow using NestJS.  
It handles uploading, previewing, and simulating role-based signing — cleanly designed and ready for real API extension if needed.

---

## 👤 Author

- 💼 Developer: Aashu Kumar
- 📧 Email: aashuraaz727400@gmail.com
- 🔗 GitHub: https://github.com/aashu9798

---

## 📌 License

Let me know if you want the follow-up `git add`, `commit`, and `push` command too.

---

---