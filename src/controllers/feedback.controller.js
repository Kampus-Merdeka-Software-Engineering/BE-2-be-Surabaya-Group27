const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function saveFeedback(req, res) {
  const { name, email, message } = req.body;

  try {
    const savedFeedback = await prisma.feedback.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({ error: 'Gagal menyimpan feedback' });
  }
}

module.exports = {
  saveFeedback,
};
