export default class Todo {
  constructor(content) {
    this.id = new Date().getTime()
    this.content = content
    this.isCompleted = false
  }

  static toggle(todo) {
    const copied = Object.assign({}, todo)
    copied.isCompleted = !copied.isCompleted
    return copied
  }
}
