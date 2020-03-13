import { Repository, EntityRepository } from "typeorm";
import { Activity } from "./activity.entity";

@EntityRepository(Activity)
export class ActivityRespository extends Repository<Activity>{
    
}