import ky from 'ky';

import type {
  AfterResponseHook,
  BeforeRequestHook,
  KyInstance,
  Options,
} from 'ky';

export interface BaseApiOptions {
  baseUrl?: string;
  beforeRequest?: BeforeRequestHook;
  afterResponse?: AfterResponseHook;
}

export class BaseJsonApi {
  private baseUrl: string | undefined;
  private ky: KyInstance;
  private beforeRequest: BeforeRequestHook | undefined;
  private afterResponse: AfterResponseHook | undefined;

  constructor(opts?: BaseApiOptions) {
    this.baseUrl = opts?.baseUrl;
    this.ky = ky.extend({
      prefixUrl: opts?.baseUrl,
      hooks: {
        beforeRequest: opts?.beforeRequest ? [opts.beforeRequest] : [],
        afterResponse: opts?.afterResponse ? [opts.afterResponse] : [],
      },
    });
  }

  private trimLeadingSlash(url: string): string {
    if (url.startsWith('/')) {
      return url.replace(/^\/+/, '');
    }

    return url;
  }

  onBeforeRequest(fn: BeforeRequestHook) {
    this.beforeRequest = fn;
    this.ky = this.ky.extend({
      hooks: {
        beforeRequest: [fn],
        afterResponse: this.afterResponse ? [this.afterResponse] : [],
      },
    });
  }

  onAfterResponse(fn: AfterResponseHook) {
    this.afterResponse = fn;
    this.ky = this.ky.extend({
      hooks: {
        afterResponse: [fn],
        beforeRequest: this.beforeRequest ? [this.beforeRequest] : [],
      },
    });
  }

  async get<Res = unknown>(url: string, options?: Options) {
    return (await this.ky
      .get(this.trimLeadingSlash(url), options)
      .json()) as Res;
  }

  async post<Res = unknown>(url: string, options?: Options) {
    return (await this.ky
      .post(this.trimLeadingSlash(url), options)
      .json()) as Res;
  }

  async delete<Res = unknown>(url: string, options?: Options) {
    return (await this.ky
      .delete(this.trimLeadingSlash(url), options)
      .json()) as Res;
  }

  async put<Res = unknown>(url: string, options?: Options) {
    return (await this.ky
      .put(this.trimLeadingSlash(url), options)
      .json()) as Res;
  }

  async patch<Res = unknown>(url: string, options?: Options) {
    return (await this.ky
      .patch(this.trimLeadingSlash(url), options)
      .json()) as Res;
  }
}
