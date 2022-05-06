export interface FeedbacksCreateData {
    id: string;
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbacksCreateData) => Promise<void>;
}