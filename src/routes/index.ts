import { Router} from 'express';

import CashFlowRouter  from './CashFlows';
import apiKeyMW from '@middleware/apikeyHeaderValidator';

const router  = Router();

// http://localhost:3001/cashflow/byindex/1
router.use('/cashflow', apiKeyMW, CashFlowRouter);

export default router;
