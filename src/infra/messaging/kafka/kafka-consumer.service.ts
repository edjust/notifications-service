import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['flowing-dogfish-11184-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Zmxvd2luZy1kb2dmaXNoLTExMTg0JEawv9_JSsWMAVaNAGib-6XAHbQBH6cU-1s',
          password: '8b4ab91e2eb747238dda9f9c4345f6eb',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
