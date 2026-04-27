const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({
      name,
      email,
      message,
    });

    const saved = await contact.save();
    res.status(201).json({ 
      success: true, 
      message: "Message saved successfully",
      data: saved 
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ 
      success: false,
      error: error.message || "Failed to save message" 
    });
  }
};