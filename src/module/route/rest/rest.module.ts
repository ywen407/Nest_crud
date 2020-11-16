import { Module } from '@nestjs/common';
import { RestService } from './rest.service';
import { RestController } from './rest.controller';
import { TypedbModule } from '../../typedb/typedb.module';
import { restProviders } from './rest.providers';

@Module({
	imports: [TypedbModule],
	controllers: [RestController],
	providers: [...restProviders, RestService],
})
export class RestModule {}
