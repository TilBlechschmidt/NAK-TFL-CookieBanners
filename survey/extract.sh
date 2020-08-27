find . -name "*.tar" -exec basename {} .tar \; > names.txt

cat names.txt | xargs mkdir
cat names.txt | xargs -I % tar -C % -xf %.tar

rm -f names.txt