#!/bin/sh

mkdir -p data/gamerankings
for i in $(seq 0 499)
do wget "http://www.gamerankings.com/browse.html?numrev=4&sort=0&page=$i" -O data/gamerankings/$i;
done
