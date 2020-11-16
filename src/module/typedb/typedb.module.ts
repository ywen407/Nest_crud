import { Module } from '@nestjs/common';
import { typedbProviders } from './typedb.providers';

@Module({
	providers: [...typedbProviders], //이 모듈은 typeormdb를 서비스를 제공한다고 명시.
	exports: [...typedbProviders],
})
export class TypedbModule {}
