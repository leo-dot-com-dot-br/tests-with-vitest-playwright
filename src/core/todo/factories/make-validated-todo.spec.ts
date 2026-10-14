import * as sanitizeStrMod from "@/utils/sanitize-str";
import { makeValidatedTodo } from "./make-validated-todo";

describe('makeValidatedTodo (unit)', () => {
  test('should call sanitizeStr function with right value', () => {
    const description = 'abcd';
    const sanitizeStrSpy = vi.spyOn(sanitizeStrMod, 'sanitizeStr').mockReturnValue(description)

    makeValidatedTodo(description)

    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description)
  })

  test('should call validatedTodoDescription with sanitizeStr returns', () => { })

  test('should call makeNewTodo if validatedTodoDescription return success', () => { })

  test('should return validatedTodoDescription.error if validation failed', () => { })
})
