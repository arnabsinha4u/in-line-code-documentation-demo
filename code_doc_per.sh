#!/usr/bin/sh
limit=0.4 #Set threshold for Documentation vs Code Ratio

doc=`grep "//.*" lib/* | wc -l`
code=`grep -v "//.*" lib/* | wc -l`
val=`bc -l <<< "$doc / $code"`

echo "LoC: $code" #Lines of Code
echo "LoD: $doc" #Lines of Documentation
echo "Documentation vs Code Ratio: $val"

if ((`bc <<< "$val>$limit"`))
then
    true
else
    echo "Below threshhold $limit, thus failing!"
    false
fi
