// server/api/comments.ts
import { PrismaClient } from '@prisma/client';
import { defineEventHandler, readBody } from 'h3';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;

  if (method === 'GET') {
    // Fetch all comments
    const comments = await prisma.comments.findMany();
    return comments;
  }

  if (method === 'POST') {
    // Create a new comment
    const body = await readBody(event);
    const newComment = await prisma.comments.create({
      data: {
        name: body.name,
        comment: body.comment,
      },
    });
    return newComment;
  }

  if (method === 'PUT') {
    // Update a comment
    const body = await readBody(event);
    const { id, name, comment } = body;

    const updatedComment = await prisma.comments.update({
      where: { id },
      data: { name, comment },
    });
    return updatedComment;
  }

  if (method === 'DELETE') {
    // Delete a comment
    const { id } = await readBody(event);
    await prisma.comments.delete({ where: { id } });
    return { message: 'Comment deleted' };
  }

  // Return a 405 Method Not Allowed for unsupported methods
  return { status: 405, message: 'Method Not Allowed' };
});
