import express from 'express';
import cors from 'cors';
import { getTables, createTables, updateTables, deleteTables, checkoutTables } from '../controllers/tables.js';
import bodyParser from 'body-parser';
const router = express();

router.use(cors());
router.get('/', getTables);
router.post('/tables', bodyParser.json(), createTables);
router.put('/update', bodyParser.json(), updateTables);
router.delete('/delete', bodyParser.json(), deleteTables);
router.delete('/checkout', bodyParser.json(), checkoutTables);
router.listen(3002, () => {
});

export default router;