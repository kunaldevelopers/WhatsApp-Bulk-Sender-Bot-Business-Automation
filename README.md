# 🚀 WhatsApp Bulk Sender Bot - Business Automation

A **💯 free**, **fully automated** solution for startups, small businesses, and marketers to send **bulk WhatsApp messages**.
This bot acts as an **alternative to the WhatsApp Business API**, enabling **scalable marketing and customer engagement — without spending a penny!**

---

## 📚 Table of Contents

1.  [📌 Overview](#overview)
2.  [✨ Features](#features)
3.  [🛠️ Installation Guide](#installation-guide)
    - [Windows](#windows)
      - [Using Command Prompt](#using-command-prompt)
      - [Using Git Bash (Recommended)](#using-git-bash-recommended)
    - [Linux](#linux)
    - [macOS](#macos)
4.  [🚀 Usage](#usage)
5.  [🤝 Contributing](#contributing)
6.  [📄 License](#license)
7.  [👨‍💻 Maintainer](#project-maintainer--creator)

---

## 📌 Overview

This **WhatsApp Bulk Sender Bot** helps businesses automate their WhatsApp marketing campaigns 📢.
Send bulk messages to customers, clients, or users — **completely free** and without the official WhatsApp Business API.
Perfect for 🔥 startups, growing businesses, and marketers who want power and flexibility with zero cost.

---

## ✨ Features

✅ **Unlimited Messaging** – Send as many messages as you want to unlimited contacts.  
⚙️ **Easy Setup** – Relatively simple setup process.  
🌍 **Multi-Country Support** – Works globally, just ensure your contact numbers are formatted correctly.  
📈 **Business Automation** – Automate engagement, campaigns, and more.  
🔒 **Free & Secure** – 100% free. No API key. No subscription. (Remember to use responsibly to avoid WhatsApp restrictions).

---

## 🛠️ Installation Guide

**Prerequisites:**

- **Node.js and npm:** You'll need Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website ([https://nodejs.org/](https://nodejs.org/)).
- **Git (Optional but Recommended):** While not strictly necessary if you download the ZIP, Git is highly recommended for easier updates and version control. You can download it from ([https://git-scm.com/download/](https://git-scm.com/download/)).

### Windows

#### Using Command Prompt

1.  **Install Node.js:**

    - Download the Windows installer from the Node.js website.
    - Run the installer and follow the on-screen instructions. Make sure to accept the npm package manager during the installation.
    - Open Command Prompt and verify the installation by running:
      ```bash
      node -v
      npm -v
      ```
      This should display the installed versions of Node.js and npm.

2.  **Clone the Repository:**

    - Open Command Prompt.
    - Navigate to the directory where you want to save the project (e.g., `cd Desktop`).
    - Clone the repository:
      ```bash
      git clone https://github.com/kunaldevelopers/WhatsApp-Bulk-Sender-Bot-Business-Automation.git
      ```

3.  **Navigate to the Project Folder:**

    ```bash
    cd WhatsApp-Bulk-Sender-Bot-Business-Automation
    ```

4.  **Install Dependencies:**

    ```bash
    npm install
    ```

5.  **Start the Bot:**
    ```bash
    node index.js
    ```

#### Using Git Bash (Recommended)

1.  **Install Git Bash:**

    - Download the Git for Windows installer from ([https://git-scm.com/download/win](https://git-scm.com/download/win)).
    - Run the installer and follow the on-screen instructions. The default settings are usually fine. This will install Git and Git Bash.

2.  **Install Node.js:**

    - Download the Windows installer from the Node.js website.
    - Run the installer and follow the on-screen instructions. Make sure to accept the npm package manager during the installation.
    - Open Git Bash and verify the installation by running:
      ```bash
      node -v
      npm -v
      ```
      This should display the installed versions of Node.js and npm.

3.  **Clone the Repository:**

    - Open Git Bash.
    - Navigate to the directory where you want to save the project (e.g., `cd Desktop`).
    - Clone the repository:
      ```bash
      git clone https://github.com/kunaldevelopers/WhatsApp-Bulk-Sender-Bot-Business-Automation.git
      ```

4.  **Navigate to the Project Folder:**

    ```bash
    cd WhatsApp-Bulk-Sender-Bot-Business-Automation
    ```

5.  **Install Dependencies:**

    ```bash
    npm install
    ```

6.  **Start the Bot:**
    ```bash
    node index.js
    ```

### Linux

1.  **Install Node.js and npm:**

    - It's recommended to use a Node Version Manager (NVM) to install Node.js. This helps manage different Node.js versions.
      ```bash
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
      ```
      (You might need to restart your terminal or source your `.bashrc` or `.zshrc` file: `source ~/.bashrc` or `source ~/.zshrc`)
      ```bash
      nvm install --lts # Install the latest LTS version
      nvm use --lts
      ```
    - Verify the installation:
      ```bash
      node -v
      npm -v
      ```

2.  **Clone the Repository:**

    ```bash
    git clone https://github.com/kunaldevelopers/WhatsApp-Bulk-Sender-Bot-Business-Automation.git
    ```

3.  **Navigate to the Project Folder:**

    ```bash
    cd WhatsApp-Bulk-Sender-Bot-Business-Automation
    ```

4.  **Install Dependencies:**

    ```bash
    npm install
    ```

5.  **Start the Bot:**
    ```bash
    node index.js
    ```

### macOS

1.  **Install Homebrew (if not already installed):**

    - Homebrew is a package manager for macOS.
      ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      ```

2.  **Install Node.js and npm:**

    - You can use Homebrew or NVM (Node Version Manager)
      - **Using Homebrew:**
        ```bash
        brew install node
        ```
      - **Using NVM (Recommended):**
        ```bash
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        source ~/.nvm/nvm.sh
        nvm install --lts
        nvm use --lts
        ```
    - Verify the installation:
      ```bash
      node -v
      npm -v
      ```

3.  **Clone the Repository:**

    ```bash
    git clone https://github.com/kunaldevelopers/WhatsApp-Bulk-Sender-Bot-Business-Automation.git
    ```

4.  **Navigate to the Project Folder:**

    ```bash
    cd WhatsApp-Bulk-Sender-Bot-Business-Automation
    ```

5.  **Install Dependencies:**

    ```bash
    npm install
    ```

6.  **Start the Bot:**
    ```bash
    node index.js
    ```

🎉 You're now ready to automate WhatsApp!

---

## 🚀 Usage

1.  **Prepare your Excel file:**

    - Use a `.xlsx` file with a column titled `Number` (e.g., `9923235645`) – Don't include the country code, no spaces.
    - Optional: Add a `Name` column for personalized messages.

2.  **Start the bot:**

    ```bash
    node index.js
    ```

3.  **Send your message:**

    - Type your message when prompted.
    - The bot will deliver the message to each contact in the Excel file.

4.  **Track progress:**

    - Real-time status logs show successful sends and any errors.

---

## 🤝 Contributing

Want to improve or customize this bot? You're welcome! 👇

1.  Fork this repository 🍴
2.  Create a new branch (`git checkout -b feature/your-feature-name`)
3.  Commit your changes ✅
4.  Push and create a pull request 🚀

Found a bug or have ideas? [Open an issue](https://github.com/kunaldevelopers/WhatsApp-Bulk-Sender-Bot-Business-Automation/issues) — we’d love to hear from you!

---

## 👨‍💻 Project Maintainer & Creator

**Kunal Kumar Pandit**

- 💼 [LinkedIn](https://www.linkedin.com/in/kunalkumarpandit/)
- 📷 [Instagram](https://www.instagram.com/kunal_aryaaa)
- 📧 [Gmail](mailto:kunalkprnc@gmail.com)
- 🌐 [Website](https://cyberkunal.com)
- 💻 [GitHub](https://github.com/kunaldevelopers)

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.linkedin.com/in/kunalkumarpandit/).

---

> 🙌 If this project helped you, please **star ⭐** the repository and share it with your network!
