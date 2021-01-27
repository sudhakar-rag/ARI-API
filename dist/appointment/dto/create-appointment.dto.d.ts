export declare enum AppointmentType {
    I = "I",
    G = "G"
}
export declare enum AppointmentStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare class CreateAppointmentDto {
    appointmentId?: number;
    providerId: number;
    patientId: number;
    userId: number;
    date: string;
    start: string;
    end: string;
    type: string;
    meetingId: string;
    joinUrl: string;
    startUrl: string;
    status: string;
    appointmentType: string;
    subject: string;
    message: string;
    fileType: string;
    fileName: string;
    uploadedBy: number;
    files: string;
    paymentId: number;
}
