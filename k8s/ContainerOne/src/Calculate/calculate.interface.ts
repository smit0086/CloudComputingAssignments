export interface CalculateSuccessResponse {
    file: string;
    sum: number;
}

export interface CalculateErrorResponse {
    file: string;
    error: string;
}