# 📄 eSign Workflow - NestJS Backend Assignment

This project implements a simple **eSign (Electronic Signature) workflow backend** using **NestJS**.  

It allows users to:
- Upload a PDF file
- Preview the uploaded PDF
- Submit the PDF for e-signing with three signer roles (Role 1, 2, 3)
- Simulate the signature workflow

---

## 🛠️ Tech Stack

- **Backend Framework**: NestJS
- **File Handling**: Multer
- **HTTP Client**: Axios
- **PDF Preview**: Local file preview via GET
- **(Optional) eSign API**: Documenso (simulated due to unreachable domain)

---

## 📦 Features Implemented

| Feature             | Description                                           |
|---------------------|-------------------------------------------------------|
| 🔼 PDF Upload      | Users can upload a PDF via `POST /pdf/upload`         |
| 👀 PDF Preview     | Access uploaded PDF with `GET /pdf/preview/:filename` |
| ✍️ eSign Submit    | Simulates sending PDF for signature by 3 roles        |
| ⚙️ Backend-only    | No frontend required                                  | 

---

## 👥 Signer Roles

| Role    | Description                                |
|---------|--------------------------------------------|
| Role 1  | Uploads PDF and starts the process         |
| Role 2  | Receives PDF for signing after Role 1      |
| Role 3  | Final signer after Role 2                  |

> These roles simulate a real-world multi-party signature flow.

---

## 🧪 API Endpoints

### 1. Upload PDF

```
POST /pdf/upload
```

- **Body Type**: `form-data`
- **Field**: `file` (PDF file)

✅ **Returns**
```json
{
  "message": "PDF uploaded successfully",
  "filePath": "uploads/file-<timestamp>.pdf"
}
```

---

### 2. Preview PDF

```
GET /pdf/preview/:filename
```

Example:
```
/pdf/preview/file-123456.pdf
```

✅ Opens/downloads the PDF.

---

### 3. Submit for eSign (Simulated)

```
POST /esign/submit
```

**Request Body (JSON):**
```json
{
  "pdfPath": "uploads/file-123456.pdf",
  "role1Email": "a@example.com",
  "role2Email": "b@example.com",
  "role3Email": "c@example.com"
}
```

✅ **Returns**
```json
{
  "message": "eSign flow simulated successfully",
  "submittedFile": "uploads/file-123456.pdf",
  "signers": [
    "a@example.com",
    "b@example.com",
    "c@example.com"
  ],
  "status": "Simulated and ready for signature"
}
```

---

## ⚠️ Note on Documenso API

The assignment refers to `https://api.documenso.com`, but the domain is not reachable publicly.

For this reason:

- ✅ eSign submission is **simulated** in this backend
- 🧪 Real API integration can be added later if Documenso is hosted locally or made accessible

---

## 🚀 How to Run

```bash
git clone <repo-url>
cd esign-workflow
npm install
mkdir uploads
npm run start
```

---

## 🧪 Run Unit Tests (Optional)

```bash
npm run test
```

---

## 📁 Folder Structure (Simplified)

```
src/
 ┣ pdf/         ← Upload & preview service
 ┣ esign/       ← eSign submit simulation
 ┗ app.module.ts
uploads/         ← Stored PDF files
```

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

This project is licensed under MIT License.
