
export interface AxiosState {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' |'DELETE';
    data?: any;
    token?: string;
};

export interface AxiosResponse {
    data?: any;
    loading: boolean,
    error?: any,
};
