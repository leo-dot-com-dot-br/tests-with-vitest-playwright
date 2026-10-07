import { makeNewTodo } from "./make-new-todo"

describe('makeNewTodo (unit)', () => {
    test('should return new valid todo', () => {
        const expectedTodo = {
            id: expect.any(String),
            description: 'meu novo todo',
            createdAt: new Date().toISOString(),
        }

        const newTodo = makeNewTodo('meu novo todo');

        expect(newTodo.description).toBe(expectedTodo.description)
})
})
