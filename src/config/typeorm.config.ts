import { TypeOrmModuleOptions } from '@nestjs/typeorm'
export const typeModuleConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    port: 5432,
    host: 'localhost',
    password: 'agosto2018',
    database: 'fullnode',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}