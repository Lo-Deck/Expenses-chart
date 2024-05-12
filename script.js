const week = document.getElementsByClassName('graph');
const day = document.querySelectorAll('.graph .info');
const date = new Date();

//console.log(date.getDay());
//console.log(week);
//console.log(week[1]);
//console.log(day);
//console.log(day[1]);

for(let i = 0; i < week.length; i++)
{

    week[i].addEventListener('mouseenter', () => {

        //console.log('mouseEnter' + i);
        day[i].classList.add('broadcast');
    
    });

    week[i].addEventListener('mouseout', () => {

        //console.log('mouseOut' + i);
        day[i].classList.remove('broadcast');
    
    });
    
}

let i = 0;
let whatDay = date.getDay()-1;


if(whatDay === -1)
{
    whatDay = 6;
}

//console.log(whatDay);

fetch('./data.json')
                .then( res => res.json() )
                .then( (file) => {

                    for( data of file )
                    {
                        //console.log(`day : ${data.day}, amount ${data.amount}`);

                        day[i].innerText = `$${data.amount}`; 
                        
                        week[i].style.height = `${data.amount/5}rem`

                        week[whatDay].style.backgroundColor = 'hsl(186, 34%, 60%)';
                        
                        i++;
                    }

                });







