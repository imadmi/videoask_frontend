export type VideoAsk = {
  id: string;
  title: string;
  url: string;
  questions: Qsts[];
};

export type Qsts = {
  question: string;
  audioUrl: string;
  next_video_id: string | null;
};

export class Stack<T> {
  private elements: T[] = [];

  // Adds an element to the top of the stack
  push(element: T): void {
    this.elements.push(element);
  }

  // Removes and returns the top element of the stack
  pop(): T | undefined {
    return this.elements.pop();
  }

  // Returns the top element of the stack without removing it
  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  // Checks if the stack is empty
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Returns the number of elements in the stack
  size(): number {
    return this.elements.length;
  }

  // Clears the stack
  clear(): void {
    this.elements = [];
  }

  // copies the stack to a new stack
  copy(): Stack<T> {
    const stack = new Stack<T>();
    stack.elements = this.elements.slice();
    return stack;
  }

  // print the stack
  print(): void {
    console.log("stack ", this.elements);
  }

  // map the stack
  map(callback: (value: T, index: number, array: T[]) => T): T[] {
    return this.elements.map(callback);
  }

  toArray(): T[] {
    return this.elements.slice();
  }
}
