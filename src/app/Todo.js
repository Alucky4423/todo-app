export default class Todo {
  constructor(content, isCompleted = false) {
    this.id = new Date().getTime()
    this.content = content
    this.isCompleted = isCompleted
  }
}
