export const TODO_ADD = "TODO_ADD";
export const TODO_UPDATE = "TODO_UPDATE";
export const TODO_DELETE = "TODO_DELETE";

export const todoAdd = (data) => ({
  type: TODO_ADD,
  payload: data,
});

export const todoUpdate = (todoId) => ({
  type: TODO_UPDATE,
  payload: todoId,
});

export const todoDelete = (todoId) => ({
  type: TODO_DELETE,
  payload: todoId,
});
