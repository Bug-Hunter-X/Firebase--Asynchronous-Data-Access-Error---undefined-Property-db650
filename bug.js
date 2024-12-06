The Firebase SDK may throw an error if you attempt to access a property of a document snapshot before the snapshot has fully loaded. This can happen if you're using asynchronous operations and try to access the data before the promise resolves.  For example:

```javascript
db.collection('users').doc('someId').get().then(doc => {
  console.log(doc.data().name); // Error if data hasn't loaded
});
```

This often manifests as `TypeError: Cannot read properties of undefined (reading 'name')` or similar.