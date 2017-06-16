#!/usr/bin/sh
limit=0.4
doc=`grep "//.*" lib/* | wc -l`
code=`grep -v "//.*" lib/* | wc -l`
val=`bc -l <<< "$doc / $code"`

echo "LoC: $code"
echo "LoD: $doc"
echo "Documentation vs Code Ratio: $val"

if ((`bc <<< "$val>$limit"`))
then
    true
else
    echo "Below threshhold $limit, thus failing!"
    false
fi
