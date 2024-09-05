import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const anser = answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova resposta",
  });

  expect(anser.content).toEqual("Nova resposta");
});
