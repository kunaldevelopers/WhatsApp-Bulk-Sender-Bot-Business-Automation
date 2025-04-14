// This is the most advanced version of all index.js files. From now on, we will only use this one.
// It can maintain the login session — once you're logged in, you will remain logged in until you manually disconnect.

const { Client, MessageMedia, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const xlsx = require("xlsx");
const fs = require("fs");

// Initialize WhatsApp client with session persistence
const client = new Client({
  authStrategy: new LocalAuth(), // This will automatically save the session
});

// Display QR code for authentication
client.on("qr", (qr) => {
  console.log("⚠️ Scan the QR code below to log in:");
  qrcode.generate(qr, { small: true });
});

// Event: Client is authenticated
client.on("authenticated", () => {
  console.log("✅ Authentication successful!");
});

// Event: Client is ready
client.on("ready", async () => {
  console.log("✅ Client is ready!");

  if (!fs.existsSync("contacts.xlsx")) {
    console.log("❌ Error: contacts.xlsx not found!");
    return;
  }

  try {
    const workbook = xlsx.readFile("contacts.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    console.log(`📊 Processing ${data.length} contacts...`);

    const messageText = `Hi there,\n\nAre you looking to take your business to the next level? We specialize in:\n\n✅ Website Development (Business, E-commerce, Portfolio)\n✅ Custom Mobile Apps (Android & iOS)\n✅ Logo & Brand Identity Design\n✅ Digital Marketing (SEO, Social Media, Google Ads)\n✅ Software & CRM Development\n✅ Business Automation Solutions\n\nLet’s create something amazing together! Reply YES to get a free consultation.\n\n📞 Call/WhatsApp: +919608263050\n🌐 Visit: https://enegixwebsolutions.com/`;

    const imagePath = "Proposal.jpg";
    const pdfPath = "Services.pdf";

    if (!fs.existsSync(imagePath) || !fs.existsSync(pdfPath)) {
      console.log("❌ Error: Image or PDF file not found!");
      return;
    }

    const imageMedia = MessageMedia.fromFilePath(imagePath);
    const pdfMedia = MessageMedia.fromFilePath(pdfPath);

    for (let row of data) {
      let number = row.Number.toString().replace(/\D/g, "");

      if (!number.startsWith("+91")) {
        number = "+91" + number;
      }

      let chatId = number.replace("+", "") + "@c.us";

      try {
        let isRegistered = await client.isRegisteredUser(chatId);
        if (!isRegistered) {
          console.log(`🚫 ${number} is NOT on WhatsApp. Skipping...`);
          continue;
        }

        await client.sendMessage(chatId, imageMedia, { caption: messageText });
        console.log(`✅ Image with text sent to ${number}`);

        let delay1 = Math.floor(Math.random() * (5000 - 2000) + 2000);
        console.log(
          `⏳ Waiting ${delay1 / 1000} seconds before sending PDF...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay1));

        await client.sendMessage(chatId, pdfMedia, {
          caption: "📄 Our Services Brochure",
        });
        console.log(`✅ PDF sent to ${number}`);

        let delay2 = Math.floor(Math.random() * (10000 - 5000) + 5000);
        console.log(
          `⏳ Waiting ${delay2 / 1000} seconds before next message...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay2));
      } catch (sendError) {
        console.log(`❌ Failed to send to ${number}:`, sendError.message);
      }
    }

    console.log("🎉✅ All messages with images & PDFs sent successfully!");
  } catch (fileError) {
    console.log("❌ Error reading contacts.xlsx:", fileError.message);
  }
});

// Handle authentication failure
client.on("auth_failure", (msg) => {
  console.error("❌ Authentication failed:", msg);
});

// Handle client disconnection
client.on("disconnected", (reason) => {
  console.log("❌ Client disconnected:", reason);
});

client.initialize();
