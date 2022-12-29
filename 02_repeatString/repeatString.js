const repeatString = function(string,num) {
    let ans="";
    if(num<0)
    {
        return 'ERROR';
    }
    else{
    for(let i=0;i<num;i++)
    {
        ans=ans.concat(string);
    }
    let result=ans.trim();
    return result;
    }


};

// Do not edit below this line
module.exports = repeatString;
