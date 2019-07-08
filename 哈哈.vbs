text()
function text()
dim a 
a=lnputBox("你喜欢我吗")
if a="喜欢"then
Msgbox"好好",0,"恭喜"
else
Msgbox"部队",0,"在给你一次机会"
text()
end if
end function