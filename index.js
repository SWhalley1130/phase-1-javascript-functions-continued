// code your solution here
function saturdayFun (activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office")
{
    return `This Monday, I will ${activity}.`;
}

// function wrapAdjective(sym, adjective)
// {
//     return `You are a ${sym}${adjective}${sym}!`;
// }

function wrapAdjective(flair="*")
{
    return function(adjective="special")
    {
        return `You are ${flair}${adjective}${flair}!`;
    }
}