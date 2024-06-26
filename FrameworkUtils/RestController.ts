import { request, APIResponse, APIRequestContext, PlaywrightTestOptions } from '@playwright/test';

export class RestController {
  constructor(private rContext: APIRequestContext) {}


  private async sendRequest(method: string, url?: string, headers?: Record<string, string>, body?: any): Promise<APIResponse> {
    const options: Record<string, any> = {
      method,
      headers,
    };

    if (body) {
      options.data = body;
    }
    var response;
    if(url){
      response = await this.rContext.fetch(url, options);
    }
    return response
   
  }

  async get(url?: string,headers?: Record<string, string>): Promise<APIResponse> {
    return this.sendRequest('GET', url, headers);
  }

  async post(body: any, headers?: Record<string, string>,url?: string): Promise<APIResponse> {
    return this.sendRequest('POST', url, headers, body);
  }

  async put(body: any, headers?: Record<string, string>,url?: string): Promise<APIResponse> {
    return this.sendRequest('PUT', url, headers, body);
  }

  async delete( headers?: Record<string, string>,url?: string): Promise<APIResponse> {
    return this.sendRequest('DELETE', url, headers);
  }

  async patch( body: any, headers?: Record<string, string>,url?: string): Promise<APIResponse> {
    return this.sendRequest('PATCH', url, headers, body);
  }

}

export async function createRequestContext(baseURL?:string,options?: PlaywrightTestOptions) {
  const requestContext = await request.newContext({baseURL,...options})
  return requestContext;
}