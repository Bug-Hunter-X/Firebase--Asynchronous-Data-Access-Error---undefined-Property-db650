# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase applications: attempting to access data from a document snapshot before it's fully loaded.  This results in `TypeError: Cannot read properties of undefined (reading 'name')` or a similar error.

## Problem

The `bug.js` file shows how accessing properties of a document snapshot before the promise resolves leads to the error.  This is a frequent issue when working with asynchronous operations in JavaScript.

## Solution

The `bugSolution.js` file provides a solution by properly handling the promise and ensuring the data is loaded before accessing properties.  This involves using an `if` statement to check if `doc.exists` and `doc.data()` is not null before accessing the properties.