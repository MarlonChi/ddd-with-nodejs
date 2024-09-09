import { Answer } from "../../enterprise/entities/answer";

export interface AnswersRepository {
  create(anser: Answer): Promise<void>;
}
