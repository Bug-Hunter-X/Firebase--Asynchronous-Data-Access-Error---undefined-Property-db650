The solution involves checking for the existence of the document and the presence of the data property before accessing it:

```javascript
db.collection('users').doc('someId').get().then(doc => {
  if (doc.exists && doc.data()) {
    console.log(doc.data().name);
  } else {
    console.log('No such document!');
  }
});
```

This revised code ensures that the property `name` is only accessed if the document exists and has the `name` property, preventing the error.  Always handle asynchronous operations appropriately in Firebase to avoid this common pitfall.