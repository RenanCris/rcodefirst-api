import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, DNSHealthIndicator, HealthCheck } from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private dns: DNSHealthIndicator,
      ) {}
    
      @Get()
      @HealthCheck()
      check() {
        return this.health.check([
          () => this.dns.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);
      }

}
