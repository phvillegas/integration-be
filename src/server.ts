import { createApp } from '@app/app';
import { config } from '@config/env';
import { logger } from '@utils/logger';

const app = createApp();

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
