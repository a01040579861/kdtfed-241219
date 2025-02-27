const numSet1 = new Set();

numSet1.add("one").add("two").add("three");

console.log(numSet1.has("four"));
console.log(numSet1.has("three"));
console.log(numSet1.size);

console.log(numSet1.keys());
console.log(numSet1.values());
console.log(numSet1.entries());

numSet1.delete("three");
console.log(numSet1);

numSet1.clear();
console.log(numSet1);
