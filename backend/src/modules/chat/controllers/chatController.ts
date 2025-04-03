// **src/interfaces/controllers/chatController.ts**
import { Request, Response } from 'express';
import { Message } from '../../../core/entities/Message';

export const getMessages = async (req: Request, res: Response) => {
  const { receiverId , senderId} = req.params;
  // const senderId = req.user?.userId; // Assuming req.user is set by authMiddleware

  try {
    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  const { receiverId, senderId , content } = req.body;
  // const senderId = req.user?.userId; // Assuming req.user is set by authMiddleware

  try {
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};