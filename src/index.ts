import * as http from 'http';
import { Task } from './types/Task';
import { Container } from './types/Container';
import { TaskStats } from './types/TaskStats';
import { ContainerStats } from './types/ContainerStats';

export class ECSMetadata {

  private readonly _baseUrl: string = process.env.ECS_CONTAINER_METADATA_URI_V4 || '';

  public get isAvailable() {
    return !!this._baseUrl;
  }

  private async _get(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const req = http.get(`${this._baseUrl}/${path}`, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
        res.on('error', (err) => reject(err));
      });

      req.on('error', (err) => reject(err));

      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'))
      });

      req.on('uncaughtException', (err) => {
        req.destroy();
        reject(err);
      });
    });
  }

  public async getTask(): Promise<Task> {
    return await this._get('task');
  }

  public async getContainer(): Promise<Container> {
    return await this._get('');
  }

  public async getTaskStats(): Promise<TaskStats> {
    return await this._get('task/stats');
  }

  public async getContainerStats(): Promise<ContainerStats> {
    return await this._get('stats');
  }

}