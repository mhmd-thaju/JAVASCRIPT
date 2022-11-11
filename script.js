const ar=[2,34,12,76,45]
console.log(ar)
let g=ar[0]
for(let i=1;i<5;i++)
{
    if(g<ar[i])
    {
        g=ar[i]
    }
}
alert(ar+" \ngreatest number is "+g)