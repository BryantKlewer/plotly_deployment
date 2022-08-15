// console log the samples data
d3.json("samples.json").then(function(data){
    console.log(data);
});

// pull all the belly button wash frequency data
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// extract the metadata for first person
d3.json("samples.json").then(function(data){
    first = data.metadata[0];
    Object.entries(first).forEach(([a, b]) =>
    {console.log(a + ": " + b);});
});

