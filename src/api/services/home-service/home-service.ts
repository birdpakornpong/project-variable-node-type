import { Arrays, Nullable } from "../../interfaces/interfaces";

export interface HomeService {
  getHello(): Promise<Nullable<Arrays>>;
}
