import { Injectable } from '@nestjs/common';

/**
 * Default service for the application.
 */
@Injectable()
export class AppService {
  /**
   * Get "Hello World" message
   * @returns {string} "Hello World!"
   */
  getHello(): string {
    return 'Hello World!';
  }
}
