import { Answer } from "../entities/answer";

export interface AnswersRepository {
  create(anser: Answer): Promise<void>;
}
