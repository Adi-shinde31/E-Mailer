# 📬 Contact Form Project

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
git clone https://github.com/your-username/contact-form-project.git
cd contact-form-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```env
PORT=3000
SENDER_EMAIL="your-email@example.com"
SENDER_PASSWORD="your password with space"
```

4. **Run the server**
```bash
node routes.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📧 Email Functionality

- This project uses **Nodemailer** with Gmail (or other SMTP providers).
- Make sure to enable "Less secure apps" or use an **app-specific password** if you're using Gmail.

---

## 🔐 Security

- Do **not** commit your `.env` file to version control.
- Make sure `.env` is included in `.gitignore`.

---

## ✅ TODO / Improvements

- Add validation and sanitization
- Add flash messages using `express-session`
- Connect to MongoDB to store messages

---

## 📃 License

This project is open-source and available under the MIT License.