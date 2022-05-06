import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepository } from "../Feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({id, type, comment, screenshot}: FeedbacksCreateData) {
        await prisma.feedback.create({
            data: {
              id,
              type,
              comment,
              screenshot,
            },
          });
    }
}