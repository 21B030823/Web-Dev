let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
//Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.
//
// Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.



//solution
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)

//The WeakSet allows to store a set of messages and easily check for the existence of a message in it.
//
// It cleans up itself automatically. The tradeoff is that we can’t iterate over it, can’t get “all read messages” from it directly. But we can do it by iterating over all messages and filtering those that are in the set.
//
// Another, different solution could be to add a property like message.isRead=true to a message after it’s read. As messages objects are managed by another code, that’s generally discouraged, but we can use a symbolic property to avoid conflicts.
//
// Like this:


// the symbolic property is only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;


//Now third-party code probably won’t see our extra property.
//
// Although symbols allow to lower the probability of problems, using WeakSet is better from the architectural point of view.


