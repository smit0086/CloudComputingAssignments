export interface ProcessSuccessResponse {
    file: string;
    sum: number;
}

export interface ProcessErrorResponse {
    file: string;
    error: string;
}