import type { AppResponse, CreateHttpConfig } from "@/types/http";
import type { AxiosInstance } from "axios";
import axios from "axios";

export default class Http {
	private api: AxiosInstance;

	private constructor(baseURL: string, withCredentials: boolean = false) {
		this.api = axios.create({
			baseURL,
			withCredentials
		});

		this.api.defaults.headers.common["Content-Type"] = "application/json";
	}

	public static create(config: CreateHttpConfig): Http {
		return new Http(config.baseURL, config.withCredentials);
	}

	public async get<T>(url: string, config?: any): Promise<AppResponse<T>> {
		return await this.api.get<T>(url, config);
	}

	public async post<T>(
		url: string,
		data?: any,
		config?: any
	): Promise<AppResponse<T>> {
		return await this.api.post<T>(url, data, config);
	}

	public async patch<T>(
		url: string,
		data?: any,
		config?: any
	): Promise<AppResponse<T>> {
		return await this.api.patch<T>(url, data, config);
	}

	public async put<T>(
		url: string,
		data?: any,
		config?: any
	): Promise<AppResponse<T>> {
		return await this.api.put<T>(url, data, config);
	}

	public async delete<T>(url: string, config?: any): Promise<AppResponse<T>> {
		return await this.api.delete<T>(url, config);
	}
}
