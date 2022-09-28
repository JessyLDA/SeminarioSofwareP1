import { ICashFlow } from "../entities/CashFlow";
import { AbstractDao } from "./AbstractDao";

export class CashFlowDao extends AbstractDao<ICashFlow>{
    public async getClashFlows() {
        super.findAll()
    }

    public async insertNewCashFlow( newCashFlow: ICashFlow) {
      try{
        const result = await super.createOne(newCashFlow);
        return result;
      }catch( ex: unknown) {
        console.log("CashFlowDao sqlite:", (ex as Error).message);
        throw ex;
      }
    }

}
