const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json()) 
}
