# sed -ie 's/{% endblock %}//g' *.html*
# sed -ie 's/snip:/excerpt:/g' *.html*

files=`ls *.html *.html~`

for fn in $files; do
  dt=`grep created: $fn | awk '{print $2 }' `
  nf=`echo $fn | cut -d '.' -f 1`
  echo "converting $fn to $dt-$nf.md"
#  mv $fn $dt-$nf.md
  cat sample.md $fn > $dt-$nf.md
done
