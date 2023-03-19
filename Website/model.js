const data = [
    {id:1 , title: 'Name:Nickname:Age',desc:'Warayut hansuwan : Pure : 21'},
    {id:2 , title: 'Univercity : StudentID', desc:'Ransit Univercity : 6303498'},
];

function getall(){
    return Promise.resolve(data);
}

module.exports = getall;