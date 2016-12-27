(function() {

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // 1. Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    let result = people.some(person => new Date().getFullYear() - person.year >= 19);
    console.log(1, result);

    // 2. Array.prototype.every() // is everyone 19 or older?
    result = people.every(person => new Date().getFullYear() - person.year >= 19);
    console.log(2, result);

    // 3. Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const id = 823423;
    result = comments.find(comment => comment.id === id);
    console.log(3, result);


    // 4. Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    // Without modifying the original Array
    let newComments = comments.slice();
    newComments.splice(newComments.findIndex(comment => comment.id === id), 1);
    console.log(4, 'Without modifying the original Array');
    console.log('newComments:', newComments);
    console.log('comments:', comments);

    // Modifying the original Array
    comments.splice(comments.findIndex(comment => comment.id === id), 1);
    console.log(4, 'Modifying the original Array');
    console.log('comments:', comments);
}())
