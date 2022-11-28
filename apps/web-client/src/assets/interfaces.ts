
export interface ErrorType {
    name?: string,
    message?: string ,
}
export interface HealthAPI {
    status: number,
    statusText: string,
    data:{
        details: {
            TaskTracker:{
                status: string
            }
        }
    }
}