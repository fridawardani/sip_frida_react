const videoData= [
    {
        name : 'Miss Scarlet',
        present : true,
        rooms:[
            {kitchen :false},
            {ballroom:false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },
    {
        name :'Mrs. White',
        present : false,
        rooms :[
            {kitchen : false},
            {ballrom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room': false},
            {library :false}
        ]
    },
    {
        name :'Reverend',
        present:true,
        rooms:[
            {kitchen : false},
            {ballrom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room': false},
            {library :false}
        ]
    },
    {
        name : 'Rusty',
        present:false,
        rooms:[
            {kitchen : false},
            {ballrom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room': false},
            {library :false}
        ]
    }, 
    {
        name : 'Colonel Mustard',
        present:true,
        rooms:[
            {kitchen : false},
            {ballrom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room': false},
            {library :false}
        ]
    },
    {
        name : 'Professor Plum',
        present:true,
        rooms:[
            {kitchen : false},
            {ballrom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room': false},
            {library :false}
        ]
    }
]

let Present = videoData.filter((hasil) => hasil.present == true);
console.log(Present)