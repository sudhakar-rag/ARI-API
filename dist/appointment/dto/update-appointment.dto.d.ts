export declare enum AppointmentStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare class UpdateAppointmentDto {
    appointmentId: number;
    status: string;
}
