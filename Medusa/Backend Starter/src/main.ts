import express = require('express');
/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('../medusa-config');
import { Medusa, TenantModule } from 'medusa-extender';
import { resolve } from 'path';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

async function bootstrap() {
	const expressInstance = express();

	await new Medusa(resolve(__dirname, '..'), expressInstance).load([
		UserModule,
		ProductModule,
		TenantModule
	]);

	expressInstance.listen(config.serverConfig.port, () => {
		console.info('Server successfully started on port ' + config.serverConfig.port);
	});
}

bootstrap();
