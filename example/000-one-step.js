let Execute = require("../src/index");

let executionTree = [
    {
        title: "step 1",
        action: (data) => {return {a: 1};}
    }
];



let executionData = {
    sub_id :123
};

let execute = new Execute();

execute.run(executionTree, executionData).then( (result)=> {
    console.log("finished with this result:");
    console.log(JSON.stringify(result, null, 2));
}).catch( (e)=> {
    console.log("catch", e);
});
