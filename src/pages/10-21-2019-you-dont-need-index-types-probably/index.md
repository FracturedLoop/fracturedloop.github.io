---
title: "You don't need TypeScript's index types (probably)"
path: '/posts/you-dont-need-typescripts-index-types-probably'
date: '2019-10-21T21:34:18Z'
tags:
  - typescript
  - tip
  - utility
---

TypeScript's index types seem super useful when you first find out about them. If you aren't familiar with index types, here's a crash course example:

```ts
interface StringArray {
  [key: number]: string;
}

const arr: StringArray = {
  0: 0,
  1: 'one',
  2: 'two',
  [Math.PI]: Math.PI,
  // This isn't valid
  'three': 'three
};
```

As you can see, `StringArray` in our example allows any string to be a property name (key), and any number to be a value. 

Index types are really handy when you have an object that could have unknown keys. They're also handy when using an object as a dictionary or associative array. They do have some downsides, though. You can't specify what keys can be used, and the syntax is also a bit verbose, in my opinion. TypeScript provides a solution, however; the [`Record`][0] utility.

In it's simplest form, `Record` is very similar to an index type. Let's give it a look: 

```ts
type StringArray = Record<number, string>;

const arr: StringArray = {
  0: 0,
  1: 'one',
  2: 'two',
  [Math.PI]: Math.PI,
  // This isn't valid
  'three': 'three'
};
```

Like with the index type, `arr` can have any number as a key, and any string as a value. For a simple example like this, `Record` merely does some cleanup. There are some things that `Record` can do, that index types can't very easily, however. One such example is specifying which keys are allowed with a union type.

```ts
// Ain't gonna work
interface TypedKeys {
    // An index signature parameter type must be 'string' or 'number'
    [key: 0 | 1]: string;
}

// Works, but is verbose
interface TypedKeys {
    0: string;
    1: string;
}

// Works, and is nice and concise
type TypedKeys = Record<0 | 1, string>;

const arr: TypedKeys = {
  0: '0',
  1: 'one',
  // Object literal may only specify known properties, and '2' does not exist in type 'Record<0 | 1, string>'
  2: 'two',
};
```

You could also use a more advanced type for the value of a `Record` as well. At first glance, there may be some downsides. It isn't immediately obvious how you could have some predefined keys, like with an index type. Nevertheless, it's still doable, though maybe not as elegant as with an index type.

```ts
interface TypedKeys {
    0: 'zero'
    [key: number]: string;
}

// Same as above
type TypedKeys = Record<number, string> & {
    0: 'zero';
};

const arr: TypedKeys = {
  0: '0',
  1: 'one',
  2: 'two',
  3: 'three'
};

```

So there you have it, that's TypeScript's `Record` utility! Hopefully you'll find new ways to use it to make your code more readable and concise.


## Key takeaways
_Maybe a bit of pun intended_

- `Record` is, in it's simplest form, an easier to read version of index types
- It makes specifying the keys and values much easier when you have complex types
- Fewer characters = quicker to type for most people
- `Record` works well with intersection and union types

[0]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt