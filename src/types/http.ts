export interface AppResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	request?: any;
}

export type CreateHttpConfig = {
	baseURL: string;
	withCredentials?: boolean;
	maxContentLength?: number;
	maxBodyLength?: number;
	maxRedirects?: number;
	decompress?: boolean;
	insecureHTTPParser?: boolean;
	family?: 4 | 6 | undefined;
};
