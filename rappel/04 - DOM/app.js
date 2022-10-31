"use strict";

const node_lastname = document.getElementsByName('lastname')[0];

const node_isCompany = document.getElementsByName('isCompany')[0];
const node_companyName = document.getElementById('companyName');

node_lastname.addEventListener('focus', () => {

    const birthday_day = document.getElementsByName('birthday[day]')[0];
    const birthday_month = document.getElementsByName('birthday[month]')[0];
    const birthday_year = document.getElementsByName('birthday[year]')[0];


    for (let i=1; i<=31; i++)
    {
        const el_opt = document.createElement('OPTION');

        el_opt.value = i;
        el_opt.innerText = i;

        birthday_day.appendChild( el_opt );
    }


    const months = ['jan','feb','mar','apr','may','june','july','aug','sep','oct','nov','dec'];
    for (let i=0; i<12; i++)
    {
        const el_opt = document.createElement('OPTION');

        el_opt.value = i;
        el_opt.innerText = months[i];

        birthday_month.appendChild( el_opt );
    }


    const date = new Date;
    const max_year = date.getFullYear();
    const min_year = max_year-100;

    for (let i=max_year; i>=min_year; i--)
    {
        const el_opt = document.createElement('OPTION');

        el_opt.value = i;
        el_opt.innerText = i;

        birthday_year.appendChild( el_opt );
    }

})

node_isCompany.addEventListener('click', event => {

    // console.log(event.target, node_isCompany);

    if (event.target.checked)
    {
        node_companyName.style = "display: block;";
    }
    else 
    {
        node_companyName.style = "display: none;";
    }

})
