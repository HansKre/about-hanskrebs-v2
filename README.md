# My About me page

## Creating thumbnail images

### Under macOS

```bash
# create lowres images
mkdir lowres
sips -Z 640 *.jpg -o ./lowres/
sips -Z 640 *.jpeg -o ./lowres/
sips -Z 640 *.png -o ./lowres/
sips -Z 640 *.gif -o ./lowres/
# add _lowres as suffix
cd lowres
for filename in *; do mv -v "${filename}" "${filename%.*}_lowres.${filename##*.}"; done;
# move
cd ..
mv ./lowres/* ./
# remove folder
rm -r lowres
```

## Amazing Ressources

- [`react-scroll-parallax`](https://www.npmjs.com/package/react-scroll-parallax)
- [`react-scroll-parallax`-storybook](https://react-scroll-parallax-next.surge.sh/?path=/story/parallaxbanner--with-parallax-disabled)
