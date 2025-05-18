# 📬 E-Mailer Project

A simple Node.js + Express application that allows users to send messages via a contact form. Email credentials are managed securely using environment variables.

---

## 🚀 Features

- Contact form with fields: Title, Sender Email, Receiver Email, and Message
- Email sending with [Nodemailer](https://nodemailer.com/)
- Secure credential management with `.env` file
- Clean and responsive UI using external CSS

---

## 🛠 Tech Stack

- Node.js
- Express.js
- HTML/CSS
- Nodemailer
- dotenv

---

## 📂 Project Structure

```
project-root/
│
├── node_modules/
├── public/
│   └── css/
│       └── styles.css
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── routes.js
└── README.md
```

---

## 📦 Installation

1. **Clone the repo**
```bash
git clone https://github.com/Adi-shinde31/E-Mailer.git
cd E-mailer
```

2. **Install dependencies**
```bash
npm install express nodemailer dotenv
```

3. **Create a `.env` file**
```env
PORT=3000
AUTH_USER="your-email@example.com"
AUTH_PASSWORD="your password with space"
```

4. **Run the server**
```bash
node routes.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ How to set your Gmail Password for sending mail?

### 🔐 1. Do NOT use your normal Gmail password!!

Google blocks "less secure apps" from logging in using your regular password — this causes the error.

### ✅ Solution: Use an **App Password** (requires 2-Step Verification enabled)

---

## 🔧 How to Generate a Gmail App Password

1. Go to your Google Account Settings:  
   [https://myaccount.google.com](https://myaccount.google.com)

2. On the left menu, click **Security**

3. Under **"Signing in to Google"**, ensure **2-Step Verification** is **ON**

4. Once 2FA is enabled, the **“App Passwords”** option appears below it

5. Click **App Passwords**

6. Select the following options:  
   - **App:** Mail  
   - **Device:** Other (enter `nodemailer`)

7. Click **Generate** — Google will provide a **16-character app password**

---

#### 🔑 Use this app password in your Nodemailer configuration (in your `.env` file) instead of your regular Gmail password.

---

## 📧 Email Functionality

- This project uses **Nodemailer** with Gmail (or other SMTP providers).
- Make sure to enable "Less secure apps" or use an **app-specific password** if you're using Gmail.

---