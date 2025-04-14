// Index is using for the purpose of sending message to the clients

const { Client, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const xlsx = require("xlsx");
const fs = require("fs");

// Initialize WhatsApp client
const client = new Client();

// Display QR code for authentication
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Event: Client is ready
client.on("ready", async () => {
  console.log("✅ Client is ready!");

  // Check if contacts.xlsx exists
  if (!fs.existsSync("contacts.xlsx")) {
    console.log("❌ Error: contacts.xlsx not found!");
    return;
  }

  // Load Excel file
  try {
    const workbook = xlsx.readFile("contacts.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    console.log(`📊 Processing ${data.length} contacts...`);

    // ✅ Fixed message for all contacts (English Version)
    // const messageText = `Hi there,\n\nAre you looking to take your business to the next level? We specialize in:\n\n✅ Website Development (Business, E-commerce, Portfolio)\n✅ Custom Mobile Apps (Android & iOS)\n✅ Logo & Brand Identity Design\n✅ Digital Marketing (SEO, Social Media, Google Ads)\n✅ Software & CRM Development\n✅ Business Automation Solutions\n\nLet’s create something amazing together! Reply YES to get a free consultation.\n\n📞 Call/WhatsApp: +919608263050\n🌐 Visit: https://enegixwebsolutions.com/`;

    // ✅ Fixed message for all contacts (Hindi Version)
    // const messageText = `Hello Sir/Ma'am 😊\n\nKya aap apne business ko *next level* par le jaana chahte hain?\n\n*EnegiX Global* - Ranchi se belong karne wali ek trusted IT company hai, jo aapke liye laaye hai complete digital solutions:\n\n🚀 *Website Development* (Business, E-commerce, Portfolio)\n📱 *Custom Mobile Apps* (Android & iOS)\n🎨 *Logo & Brand Identity Design*\n📈 *Digital Marketing* (SEO, Social Media, Google Ads)\n💻 *Software & CRM Development*\n🤖 *Business Automation Solutions*\n\n*Special Offer:* Agar aap humse apni website banwate hain, to hum aapke product ki *FREE digital marketing* karenge — woh bhi *highly targeted platforms* par!\n\nHam Ranchi ke hi hain, isliye aap chahein to humare office me kabhi bhi visit kar sakte hain. \nApne sapno ko *sakar karne ki journey* yahin se shuru ho sakti hai! 💡✨\n\n📍 Office Location:\nhttps://maps.app.goo.gl/fhJ6t4zrJSsjrPvx7\n\nChaliye milke kuch *amazing* banate hain!\nReply karein *YES* aur paayen *FREE consultation*.\n\n📞 Call/WhatsApp: +91 9608263050\n🌐 Visit: https://enegixwebsolutions.com/`;

    // For Tour and Travel
    const messageText =
      "Hello Sir 😀\n\nRunning a *Tour & Travel business in West Bengal*?\nWhy limit your reach to local areas when your competitors are already getting clients from across India and even abroad? 🌍\n\nWe are *EnegiX Global* — a *Govt. Registered IT Company* helping travel brands grow digitally:\n\n🌐 *Travel Website with Online Booking System*\n📈 *Targeted Marketing (Google, Instagram, etc.)*\n💬 *Live Chat to capture real-time queries*\n\n🎁 *Free Marketing* with any service\n\nLet’s take your brand from West Bengal to all over India — or the world! 🌏\nReply *YES* for a *Free Consultation*\n\n📞 WhatsApp: +91 9608263050\n🌐 www.enegixwebsolutions.com";

    const imagePath = "Proposal.jpg";
    const pdfPath = "Services.pdf";

    // ✅ Check if files exist
    if (!fs.existsSync(imagePath) || !fs.existsSync(pdfPath)) {
      console.log("❌ Error: Image or PDF file not found!");
      return;
    }

    // ✅ Read media files
    const imageMedia = MessageMedia.fromFilePath(imagePath);
    const pdfMedia = MessageMedia.fromFilePath(pdfPath);

    for (let row of data) {
      let number = row.Number.toString().replace(/\D/g, ""); // Remove non-numeric characters

      // ✅ Ensure number has +91 country code
      if (!number.startsWith("+91")) {
        number = "+91" + number;
      }

      let chatId = number.replace("+", "") + "@c.us"; // Convert to WhatsApp format

      try {
        // ✅ Check if number is on WhatsApp
        let isRegistered = await client.isRegisteredUser(chatId);
        if (!isRegistered) {
          console.log(`🚫 ${number} is NOT on WhatsApp. Skipping...`);
          continue;
        }

        // ✅ Send image with text caption
        await client.sendMessage(chatId, imageMedia, { caption: messageText });
        console.log(`✅ Image with text sent to ${number}`);

        // ✅ Delay (2-5 seconds) before sending the PDF
        let delay1 = Math.floor(Math.random() * (5000 - 2000) + 2000);
        console.log(
          `⏳ Waiting ${delay1 / 1000} seconds before sending PDF...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay1));

        // ✅ Send PDF
        await client.sendMessage(chatId, pdfMedia, {
          caption: "📄 Our Services Brochure",
        });
        console.log(`✅ PDF sent to ${number}`);

        // ✅ Random delay (5-10 seconds) to prevent spam detection before next contact
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

// Initialize the WhatsApp bot
client.initialize();
