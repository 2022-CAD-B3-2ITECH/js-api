"use strict";

exports.strReplace = function (str, data={}) 
{
    for (const key in data) 
    {
        str = str.replace(`%${key}%`, data[key]);
    }

    return str;
}