var tabs = document.getElementById('heading-container').children;
var tabcontents = document.getElementById('content').children;
var myFunction = function()
{
    var tabchange = this.mynum;
    for(var int = 0; int<tabcontents.length; int++)
        {
            tabcontents[int].className='tabdata';
            tabs[int].className='heading';
        }
    tabcontents[tabchange].classList.add('tab-active');
    this.classList.add('current-tab');
}
for(var index=0; index<tabs.length; index++)
    {
        tabs[index].mynum = index;
        tabs[index].addEventListener('click',myFunction,false);
    }