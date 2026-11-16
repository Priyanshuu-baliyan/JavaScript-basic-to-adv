// Global Execution Context (Always created first)
// Function Execution Context (Created every time a function is called) "The Sandbox" (a New Variable Environment + Execution Thread). This sandbox goes through the exact same two phases



// 2. The Two Phases of Execution

// 2.1 Memory Creation Phase

// Variables: Assigned the value undefined.
// Functions: The entire function definition/body is stored in memory.

// 2.2 Execution Phase

// This is where the actual code logic runs.
// Variables are assigned their actual values (replacing undefined).
// Mathematical operations run.
// When a function is called, a brand new Function Execution Context is created.

// Call Stack (LIFO),  Global Execution Context is always at the very bottom of the stack

function one(){
  console.log("one");
  two()
}
function two(){
  console.log("Two");
  three()
}
function three(){
  console.log("three");
}

one()
two()
three()