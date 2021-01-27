export declare class CreateNotificationDto {
    notificationId?: number;
    appointmentId: number;
    userId: number;
    message: string;
    text?: string;
    status: boolean;
}
